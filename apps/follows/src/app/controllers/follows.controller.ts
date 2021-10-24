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

    @Post('/:profileId/follow')
    @ApiResponse({ status: 201, type: Boolean, description: 'Adds a follower' })
    follow(@Param('profileId') profileId: string): boolean {
        console.log(`follow-profileId:${profileId}`);
        this.repo.addFollow(profileId, profileId); //TODO: get the user profile id
        this.followsMessageProvider.followNotifier(profileId, profileId);
        return true;
    }

    @Delete('/:profileId/follow')
    @ApiResponse({ status: 204, type: Boolean, description: 'Remove a follower' })
    unfollow(@Param('profileId') profileId: string) : boolean {
        console.log(`unfollow-profileId:${profileId}`);
        this.repo.removeFollow(profileId, profileId); //TODO: get the user profile id
        this.followsMessageProvider.unfollowNotifier(profileId, profileId);
        return true;
    }
}
