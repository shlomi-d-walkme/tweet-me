import { Test, TestingModule } from '@nestjs/testing';
import { FeedsResolver } from './feeds.resolver';

describe('FeedsResolver', () => {
  let resolver: FeedsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedsResolver],
    }).compile();

    resolver = module.get<FeedsResolver>(FeedsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
