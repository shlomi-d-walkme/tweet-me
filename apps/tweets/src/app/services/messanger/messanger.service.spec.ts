import { Test, TestingModule } from '@nestjs/testing';
import { MessangerService } from './messanger.service';

describe('MessangerService', () => {
  let service: MessangerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessangerService],
    }).compile();

    service = module.get<MessangerService>(MessangerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
