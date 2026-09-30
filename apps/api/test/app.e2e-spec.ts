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

  afterEach(async () => {
    await app.close();
  });
});
