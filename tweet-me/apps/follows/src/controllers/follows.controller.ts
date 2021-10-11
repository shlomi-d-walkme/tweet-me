import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FollowProfileDto } from '../dto/follow-profile-dto';

@Controller('follows')
export class FollowsController {

    @Get()
    getFollowersByUser(profileId: number) {

    }

    @Get()
    getFollowingByUser(profileId: number) {

    }

    @Post()
    follow(@Body() followProfileDto: FollowProfileDto) {


    }

    @Delete()
    unfollow(@Body() followProfileDto: FollowProfileDto) {
        
    }
}
