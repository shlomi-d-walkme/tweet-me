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
        console.log("getTweets", profileId);
        this.repo.getTweets(profileId);
        return [new TweetsDto()];
    }

    @Post('/add/:profileId/')
    @ApiOkResponse({ status: 201, type: TweetsDto, description: 'Add a tweet' })
    addTweet(@Param('profileId') profileId: string, @Param('content') content: string) {
        console.log("addTweet", profileId, content);
        return undefined;
    }

    @Delete('delete/:tweetId/')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    deleteTweet(@Param('tweetId') tweetId: string) {
        console.log("deleteTweet", tweetId)
        return undefined;
    }

    @Put('update/:tweetId/')
    @ApiOkResponse({ status: 204, type: Boolean, description: 'Remove a tweet' })
    updateTweet(@Param('tweetId') tweetId: string, @Param('content') content: string) {
        console.log("updateTweet", tweetId, content)
        return undefined;
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
