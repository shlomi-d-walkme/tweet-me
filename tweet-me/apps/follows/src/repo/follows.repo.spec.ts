import { Test, TestingModule } from '@nestjs/testing';
import { FollowsRepo } from './follows.repo';

describe('FollowsRepo', () => {
  let provider: FollowsRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowsRepo],
    }).compile();

    provider = module.get<FollowsRepo>(FollowsRepo);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
