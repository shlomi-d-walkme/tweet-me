import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FollowProfileDto } from '../dto/follow-profile-dto';

@Controller('api')
export class FollowsController {

    @Get('followers-by-user/:profileId')
    getFollowersByUser(@Param('profileId') profileId: number) {
        return "getFollowersByUser";
    }

    @Get('following-by-user/:profileId')
    getFollowingByUser(@Param('profileId') profileId: number) {
        return "getFollowingByUser";
    }

    @Post('follow')
    follow(@Body() followProfileDto: FollowProfileDto) {
        return "follow";
    }

    @Delete('unfollow')
    unfollow(@Body() followProfileDto: FollowProfileDto) {
        return "unfollow";
    }
}
