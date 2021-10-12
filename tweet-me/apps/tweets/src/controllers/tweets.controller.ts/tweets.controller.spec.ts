import { Test, TestingModule } from '@nestjs/testing';
import { Tweets.Controller.TsController } from './tweets.controller';

describe('Tweets.Controller.TsController', () => {
  let controller: Tweets.Controller.TsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Tweets.Controller.TsController],
    }).compile();

    controller = module.get<Tweets.Controller.TsController>(Tweets.Controller.TsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
