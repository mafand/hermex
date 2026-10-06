import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module.js';

describe('GraphQL (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('hello query', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ hello }' })
      .expect(200)
      .expect(({ body }) => expect(body.data.hello).toBe('Hermex API'));
  });

  it('categories query', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ categories { id name } }' })
      .expect(200)
      .expect(({ body }) => {
        const names = body.data.categories.map(
          (category: { name: string }) => category.name,
        );
        expect(names).toEqual(
          expect.arrayContaining([
            'Hatch',
            'Sedan',
            'SUV',
            'Minivan',
            'Picape',
          ]),
        );
        expect(body.data.categories.every((c: { id: string }) => c.id)).toBe(
          true,
        );
      });
  });

  it('locations query', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ locations { id name address city state } }' })
      .expect(200)
      .expect(({ body }) => {
        const locations: { id: string; name: string; city: string }[] =
          body.data.locations;
        const names = locations.map((location) => location.name);

        expect(locations.length).toBeGreaterThanOrEqual(3);
        expect(
          new Set(locations.map((l) => l.city)).size,
        ).toBeGreaterThanOrEqual(3);
        expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b)));
        expect(locations.every((l) => l.id)).toBe(true);
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
