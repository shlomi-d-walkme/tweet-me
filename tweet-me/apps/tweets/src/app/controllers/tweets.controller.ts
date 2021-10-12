import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { TweetsDto } from '../dto/tweets-dto';

@Controller('tweets')
export class Tweets {
    @Get()
    @ApiOkResponse({type: [TweetsDto]})
    getTweets(): TweetsDto[] {
        return [new TweetsDto()];
    }

    @Post()
    @ApiOkResponse({type: TweetsDto})
    addTweet() {
        return undefined;
    }

    @Delete()
    deleteTweet() {
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
