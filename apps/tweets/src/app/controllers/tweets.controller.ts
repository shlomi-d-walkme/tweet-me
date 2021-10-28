import { Body, Controller } from '@nestjs/common';
import { Delete, Get, Post, Put, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TweetsDto } from '../dto/tweets-dto';
import { TweetsRepo } from '../repo/tweets.repo';
import { MessangerService } from '../services/messanger/messanger.service';
import { ActionType } from '@tweet-me/api-interfaces';
import { TweetsInputDto } from '../dto/tweets-input-dto';
import { TweetsUpdateDto } from '../dto/tweets-update-dto';
import { TweetsDeleteDto } from '../dto/tweets-delete-dto';
import { LoggerService } from '@tweet-me/logger';

@Controller('tweets')
export class Tweets {

    constructor(private repo: TweetsRepo, private messager: MessangerService, private logger: LoggerService){
    }

    @Get('/:profileId')
    @ApiOkResponse({ status: 200, type: [TweetsDto], description: 'Returns tweets by user ids'})
    async getTweets(@Param('profileId') profileId: string): Promise<TweetsDto[]> {
        const userTweets =  await this.repo.getTweets(profileId);
        return [...userTweets];
    }

    @Get('/:profileId/:tweetId')
    @ApiOkResponse({ status: 200, type: [TweetsDto], description: 'Returns tweet by user id and tweet id'})
    async getTweet(@Param('profileId') profileId: string, @Param('tweetId') tweetId: string): Promise<TweetsDto> {
        const tweet =  await this.repo.getTweet(profileId, tweetId);
        return tweet;
    }

    @Post('/')
    @ApiOkResponse({ status: 201, type: TweetsDto, description: 'Add a tweet' })
    async addTweet(@Body() body: TweetsInputDto) : Promise<TweetsDto> {
        const tweet = await this.repo.addTweet(body.profileId, body.content, body.parentId);
        this.messager.sendMsg(tweet.id, ActionType.tweetCreated, tweet).catch();
        this.logger.info(`${body.profileId} tweets:`,{tweet});
        return tweet;
    }

    @Delete('/:profileId')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    async deleteTweet(@Param('profileId') profileId: string, @Body() body: TweetsDeleteDto) : Promise<boolean> {
        let deletedTweet;
        try {
            deletedTweet = await this.repo.removeTweet(profileId, body.tweetId);
        } catch {
            return false;
        }

        this.messager.sendMsg(body.tweetId, ActionType.tweetDeleted, deletedTweet).catch();
        return true;
    }

    @Put('/:profileId')
    @ApiOkResponse({ status: 204, type: TweetsDto, description: 'Update tweet content' })
    updateTweet(@Param('profileId') profileId: string, @Body() body: TweetsUpdateDto) : TweetsDto {
        const tweet = this.repo.updateTweet(profileId, body.tweetId, body.content);
        this.messager.sendMsg(tweet.id, ActionType.tweetUpdate, tweet).catch();
        return tweet;
    }
}