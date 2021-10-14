import { Test, TestingModule } from '@nestjs/testing';
import { ProfileSdkService } from './profile-sdk.service';

describe('ProfileSdkService', () => {
  let service: ProfileSdkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileSdkService],
    }).compile();

    service = module.get<ProfileSdkService>(ProfileSdkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
