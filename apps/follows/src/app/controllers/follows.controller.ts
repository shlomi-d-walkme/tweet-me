import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { FollowersDto } from '../dto/followers-dto';
import { FollowingDto } from '../dto/following-dto';
import { FollowsRepo } from '../repo/follows.repo';
import { FollowsMessageProvider } from '../services/follows-message-provider.service';

@Controller('api/follows')
export class FollowsController {

    constructor(private repo: FollowsRepo,
                private followsMessageProvider: FollowsMessageProvider){}

    @Get('/:profileId/followers')
    @ApiResponse({ status: 200, type: FollowersDto, description: 'Returns followers by user ids' })
    getFollowersByUser(@Param('profileId') profileId: string): FollowersDto {
        console.log(`getFollowersByUser-profileId:${profileId}`);
        const followers = this.repo.getFollowers(profileId);
        const followersResult = new FollowersDto();
        followersResult.followers = [...followers];
        console.log(`getFollowersByUser-profileId:${profileId}-returns:${JSON.stringify(followersResult)}`);
        return followersResult;
    }

    @Get('/:profileId/following')
    @ApiResponse({ status: 200, type: FollowingDto, description: 'Returns following by user ids' })
    getFollowingByUser(@Param('profileId') profileId: string): FollowingDto {
        console.log(`getFollowingByUser-profileId:${profileId}`);
        const following = this.repo.getFollowing(profileId);
        const followingResult = new FollowingDto();
        followingResult.following = [...following];
        console.log(`getFollowersByUser-profileId:${profileId}-returns:${JSON.stringify(followingResult)}`);
        return followingResult;
    }

    @Post('/:profileId/follow/:followProfileId')
    @ApiResponse({ status: 201, type: Boolean, description: 'Adds a follower' })
    follow(@Param('profileId') profileId: string, @Param('followProfileId') followProfileId: string): boolean {
        console.log(`profileId:${profileId}`);
        console.log(`follow-profileId:${followProfileId}`);
        this.repo.addFollow(profileId, followProfileId);
        this.followsMessageProvider.followNotifier(profileId, followProfileId);
        return true;
    }
 
    @Delete('/:profileId/follow/:unfollowProfileId')
    @ApiResponse({ status: 204, type: Boolean, description: 'Remove a follower' })
    unfollow(@Param('profileId') profileId: string, @Param('unfollowProfileId') unfollowProfileId: string) : boolean {
        console.log(`profileId:${profileId}`);
        console.log(`unfollow-profileId:${unfollowProfileId}`);
        this.repo.removeFollow(profileId, unfollowProfileId); 
        this.followsMessageProvider.unfollowNotifier(profileId, unfollowProfileId);
        return true;
    }
}
