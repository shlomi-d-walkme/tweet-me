import { Controller } from '@nestjs/common';
import { Delete, Get, Post, Put, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TweetsDto } from '../dto/tweets-dto';
import { TweetsRepo } from '../repo/tweets.repo';

@Controller('tweets')
export class Tweets {

    constructor(private repo: TweetsRepo){}

    @Get('/get/:profileId/')
    @ApiOkResponse({ status: 200, type: [TweetsDto], description: 'Returns tweets by user ids'})
    getTweets(@Param('profileId') profileId: string): TweetsDto[] {
        const userTweets =  this.repo.getTweets(profileId);
        const userTweetsArr = [...userTweets];
        return userTweetsArr;
    }

    @Post('/add/:profileId/')
    @ApiOkResponse({ status: 201, type: TweetsDto, description: 'Add a tweet' })
    addTweet(@Param('profileId') profileId: string, @Param('content') content: string): TweetsDto {
        const tweet = this.repo.addTweet(profileId, content);
        return tweet;
    }

    @Delete('delete/:tweetId/')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    deleteTweet(@Param('profileId') profileId: string, @Param('tweetId') tweetId: string) {
        this.repo.removeTweet(profileId, tweetId);
    }

    @Put('update/:tweetId/')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    updateTweet(@Param('profileId') profileId: string, @Param('tweetId') tweetId: string, @Param('content') content: string) {
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
