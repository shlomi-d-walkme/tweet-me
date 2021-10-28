import { Body, Controller } from '@nestjs/common';
import { Delete, Get, Post, Put, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TweetsDto } from '../dto/tweets-dto';
import { TweetsRepo } from '../repo/tweets.repo';
import { MessangerService } from '../services/messanger/messanger.service';
import { ActionType } from '@tweet-me/api-interfaces';
import { TweetsInputDto } from '../dto/tweets-input-dto';
import { TweetsUpdateDto } from '../dto/tweets-update-dto';
import { Tweet, TweetModel } from '../repo/tweet.model';
import { TweetsDeleteDto } from '../dto/tweets-delete-dto';

@Controller('tweets')
export class Tweets {

    constructor(private repo: TweetsRepo, private messager: MessangerService){
    }

    @Get('/:profileId')
    @ApiOkResponse({ status: 200, type: [TweetsDto], description: 'Returns tweets by user ids'})
    getTweets(@Param('profileId') profileId: string): TweetsDto[] {
        const userTweets =  this.repo.getTweets(profileId);
        const userTweetsArr = [...userTweets];
        return userTweetsArr;
    }

    @Get('/:profileId/:tweetId')
    @ApiOkResponse({ status: 200, type: [TweetsDto], description: 'Returns tweet by user id and tweet id'})
    getTweet(@Param('profileId') profileId: string, @Param('tweetId') tweetId: string): TweetsDto {
        const tweet =  this.repo.getTweet(profileId, tweetId);
        return tweet;
    }

    @Post('/')
    @ApiOkResponse({ status: 201, type: TweetsDto, description: 'Add a tweet' })
    addTweet(@Body() body: TweetsInputDto) : TweetsDto {
        const tweet = this.repo.addTweet(body.profileId, body.content, body.parentId);
        this.messager.sendMsg(tweet.id, ActionType.tweetCreated, tweet).catch();
        return tweet;
    }

    @Delete('/:profileId')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    deleteTweet(@Param('profileId') profileId: string, @Body() body: TweetsDeleteDto) : boolean {
        try {
            this.repo.removeTweet(profileId, body.tweetId);
        } catch {
            return false;
        }

        this.messager.sendMsg(body.tweetId, ActionType.tweetDeleted, undefined).catch();
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