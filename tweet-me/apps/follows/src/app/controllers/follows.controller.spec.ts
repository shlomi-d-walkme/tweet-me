import { Test, TestingModule } from '@nestjs/testing';
import { FollowsRepo } from '../repo/follows.repo';
import { FollowsController } from './follows.controller';

describe('FollowsController', () => {
  let controller: FollowsController;
  let followsRepoMock;

  beforeAll(async () => {
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
      followsRepoMock.addFollow.mockReturnValue(true);

      const result = controller.follow(followProfileId);

      expect(result).toBeTruthy();
    });

    it('should unfollow a profile', () => {
      const unfollowProfileId = "1";
      followsRepoMock.removeFollow.mockReturnValue(true);

      const result = controller.follow(unfollowProfileId);

      expect(result).toBeTruthy();
    });

    it('should getFollowing by profile id', () => {
      const profileId = "1";
      followsRepoMock.getFollowing.mockReturnValue(new Set(["1", "2"]));
      const res = followsRepoMock.getFollowing();

      const result = controller.getFollowingByUser(profileId);

      expect(result.following.length).toBe(2);
      expect(result.following[0]).toBe("1");
      expect(result.following[1]).toBe("2");
    });

    it('should getFollowers by profile id', () => {
      const profileId = "1";
      followsRepoMock.getFollowers.mockReturnValue(new Set(["1", "2"]));
      const res = followsRepoMock.getFollowers();

      const result = controller.getFollowersByUser(profileId);

      expect(result.followers.length).toBe(2);
      expect(result.followers[0]).toBe("1");
      expect(result.followers[1]).toBe("2");
    });
  });
});
