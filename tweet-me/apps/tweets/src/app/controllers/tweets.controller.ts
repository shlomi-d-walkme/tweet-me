import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Post } from '@nestjs/common';

@Controller('tweets')
export class Tweets {
    @Get()
    getTweets() {
        return '123';
    }

    @Post()
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
