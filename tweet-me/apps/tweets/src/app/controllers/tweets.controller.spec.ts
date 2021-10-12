import { Test, TestingModule } from '@nestjs/testing';
import { Tweets } from './tweets.controller';

describe('Tweets Controller', () => {
  let controller: Tweets;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Tweets],
    }).compile();

    controller = module.get<Tweets>(Tweets);
  });

  it('should be defined', () => {
    console.log("start test");
    controller.addTweet("1","My Tweet");
    expect(controller).toBeDefined();
  });
});
