import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service.js';
import { CategoriesResolver } from './categories.resolver.js';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;
  const findMany = vi.fn();

  beforeEach(async () => {
    findMany.mockReset();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesResolver,
        { provide: PrismaService, useValue: { category: { findMany } } },
      ],
    }).compile();

    resolver = module.get<CategoriesResolver>(CategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('returns categories ordered by name', async () => {
    const categories = [
      { id: '1', name: 'Hatch', createdAt: new Date(), updatedAt: new Date() },
    ];
    findMany.mockResolvedValue(categories);

    await expect(resolver.categories()).resolves.toEqual(categories);
    expect(findMany).toHaveBeenCalledWith({ orderBy: { name: 'asc' } });
  });
});
