import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { FollowersDto } from '../dto/followers-dto';
import { FollowingDto } from '../dto/following-dto';
import { FollowsRepo } from '../repo/follows.repo';
import { FollowsMessageProvider } from '../services/follows-message-provider.service';
import { LoggerService } from '@tweet-me/logger';

@Controller('api/follows')
export class FollowsController {

    constructor(private repo: FollowsRepo,
                private followsMessageProvider: FollowsMessageProvider,
                private logger: LoggerService){}

    @Get('/:profileId/followers')
    @ApiResponse({ status: 200, type: FollowersDto, description: 'Returns followers by user ids' })
    async getFollowersByUser(@Param('profileId') profileId: string) {
        console.log(`getFollowersByUser-profileId:${profileId}`);
        const followers = await this.repo.getFollowers(profileId);
        this.logger.info(`${profileId} followers:`,{followers});
        //@ts-ignore
        return new FollowersDto({followers});
    }

    @Get('/:profileId/following')
    @ApiResponse({ status: 200, type: FollowingDto, description: 'Returns following by user ids' })
    async getFollowingByUser(@Param('profileId') profileId: string) {
        console.log(`getFollowingByUser-profileId:${profileId}`);
        const following = await this.repo.getFollowing(profileId);
        this.logger.info(`${profileId} following:`,{following});
        return new FollowingDto({following,profileId});
    }

    @Post('/:profileId/follow/:followProfileId')
    @ApiResponse({ status: 201, type: FollowingDto, description: 'Adds a follower' })
    async follow(@Param('profileId') profileId: string, @Param('followProfileId') followProfileId: string):Promise<FollowingDto> {
        this.logger.info(`${profileId} now follows ${followProfileId}`,{});
        console.log(`profileId:${profileId}`);
        console.log(`follow-profileId:${followProfileId}`);
        await this.repo.addFollow(profileId, followProfileId);
         this.followsMessageProvider.followNotifier(profileId, followProfileId);
        return this.getFollowingByUser(profileId);
    }
 
    @Delete('/:profileId/follow/:unfollowProfileId')
    @ApiResponse({ status: 204, type: FollowingDto, description: 'Remove a follower' })
    unfollow(@Param('profileId') profileId: string, @Param('unfollowProfileId') unfollowProfileId: string):Promise<FollowingDto> {
        this.logger.info(`${profileId} not following ${unfollowProfileId} anymore`,{});
        console.log(`profileId:${profileId}`);
        console.log(`unfollow-profileId:${unfollowProfileId}`);
        this.repo.removeFollow(profileId, unfollowProfileId); 
        this.followsMessageProvider.unfollowNotifier(profileId, unfollowProfileId);
        return this.getFollowingByUser(profileId);
    }
}
