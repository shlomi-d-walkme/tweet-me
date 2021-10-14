//import request from 'supertest';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { TweetsRepo } from './repo/tweets.repo';
import { Tweets } from './controllers/tweets.controller';

describe('tweets e2e', () => {
  let app: INestApplication;
  //const tweetsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [Tweets],
      providers: [TweetsRepo]
    })
      //.overrideProvider(CatsService)
      //.useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET user tweets`, () => {
    return request(app.getHttpServer())
      .get('/tweets/1')
      .expect(200);
      // .expect({
      //   data: catsService.findAll(),
      // });
  });

  afterAll(async () => {
    await app.close();
  });
});