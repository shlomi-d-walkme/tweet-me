import { Test, TestingModule } from '@nestjs/testing';
import { TweetsResolver } from './tweets.resolver';

describe('TweetsResolver', () => {
  let resolver: TweetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsResolver],
    }).compile();

    resolver = module.get<TweetsResolver>(TweetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
