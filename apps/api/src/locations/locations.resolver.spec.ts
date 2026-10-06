import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service.js';
import { LocationsResolver } from './locations.resolver.js';

describe('LocationsResolver', () => {
  let resolver: LocationsResolver;
  const findMany = vi.fn();

  beforeEach(async () => {
    findMany.mockReset();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LocationsResolver,
        { provide: PrismaService, useValue: { location: { findMany } } },
      ],
    }).compile();

    resolver = module.get<LocationsResolver>(LocationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('returns locations ordered by name', async () => {
    const locations = [
      {
        id: '1',
        name: 'Aeroporto de Congonhas',
        address: 'Av. Washington Luís, s/n',
        city: 'São Paulo',
        state: 'SP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    findMany.mockResolvedValue(locations);

    await expect(resolver.locations()).resolves.toEqual(locations);
    expect(findMany).toHaveBeenCalledWith({ orderBy: { name: 'asc' } });
  });
});
