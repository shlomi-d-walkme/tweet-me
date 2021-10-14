import { Body, Controller } from '@nestjs/common';
import { Delete, Get, Post, Put, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TweetsDto } from '../dto/tweets-dto';
import { TweetsRepo } from '../repo/tweets.repo';

@Controller('tweets')
export class Tweets {

    constructor(private repo: TweetsRepo){}

    @Get('/:profileId')
    @ApiOkResponse({ status: 200, type: [TweetsDto], description: 'Returns tweets by user ids'})
    getTweets(@Param('profileId') profileId: string): TweetsDto[] {
        const userTweets =  this.repo.getTweets(profileId);
        const userTweetsArr = [...userTweets];
        return userTweetsArr;
    }

    @Post('/')
    @ApiOkResponse({ status: 201, type: TweetsDto, description: 'Add a tweet' })
    addTweet(@Body('profileId') profileId: string, @Body('content') content: string): TweetsDto {
        const tweet = this.repo.addTweet(profileId, content);
        return tweet;
    }

    @Delete('/:profileId')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    deleteTweet(@Param('profileId') profileId: string, @Body('tweetId') tweetId: string) {
        this.repo.removeTweet(profileId, tweetId);
    }

    @Put('/:profileId/')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    updateTweet(@Param('profileId') profileId: string, @Body('tweetId') tweetId: string, @Body('content') content: string) {
        const tweet = this.repo.updateTweet(profileId, tweetId, content);
        return tweet;
    }

}
//export class Tweets.Controller.TsController {}

// API:
// Tweet
// Post
// Delete
// Update
// Retweet
// Reply
// TweetsByUser