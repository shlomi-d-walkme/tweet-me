import { Test, TestingModule } from '@nestjs/testing';
import { KafkaFollowsServerService } from './kafka-follows-server.service';

describe('KafkaFollowsServerService', () => {
  let service: KafkaFollowsServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafkaFollowsServerService],
    }).compile();

    service = module.get<KafkaFollowsServerService>(KafkaFollowsServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
