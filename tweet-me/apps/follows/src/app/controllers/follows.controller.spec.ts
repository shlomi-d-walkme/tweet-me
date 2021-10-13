import { Test, TestingModule } from '@nestjs/testing';
import { FollowsRepo } from '../repo/follows.repo';
import { FollowsController } from './follows.controller';

describe('FollowsController', () => {
  let controller: FollowsController;
  let followsRepoMock;

  beforeEach(async () => {
    followsRepoMock = {
      addFollow: jest.fn(),
      removeFollow: jest.fn(),
      getFollowing: jest.fn(),
      getFollowers: jest.fn()
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowsController],
      providers: [ 
        { provide: FollowsRepo, useValue: followsRepoMock } ]
    }).compile();

    controller = module.get<FollowsController>(FollowsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('FollowsRepo functions tests', () => {
    it('should follow a profile', () => {
      const followProfileId = "1";
      followsRepoMock.addFollow.mockReturnValueOnce(true);

      const result = controller.follow(followProfileId);

      expect(result).toBeTruthy();
    });

    it('should unfollow a profile', () => {
      const unfollowProfileId = "1";
      followsRepoMock.removeFollow.mockReturnValueOnce(true);

      const result = controller.follow(unfollowProfileId);

      expect(result).toBeTruthy();
    });

    it('should unfollow a profile', () => {
      const unfollowProfileId = "1";
      followsRepoMock.removeFollow.mockReturnValueOnce(true);

      const result = controller.follow(unfollowProfileId);

      expect(result).toBeTruthy();
    });
  });
});
