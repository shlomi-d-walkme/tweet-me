import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { FollowProfileDto } from '../dto/follow-profile-dto';
import { FollowersDto } from '../dto/followers-dto';
import { FollowingDto } from '../dto/following-dto';

@Controller('api')
export class FollowsController {

    @Get('followers-by-user/:profileId')
    @ApiResponse({ status: 200, type: FollowersDto, description: 'Returns followers by user ids' })
    getFollowersByUser(@Param('profileId') profileId: number): FollowersDto {
        const followers: FollowersDto = new FollowersDto();
        return followers;
    }

    @Get('following-by-user/:profileId')
    @ApiResponse({ status: 200, type: FollowingDto, description: 'Returns following by user ids' })
    getFollowingByUser(@Param('profileId') profileId: number): FollowingDto {
        const following: FollowingDto = new FollowingDto();
        return following;
    }

    @Post('follow')
    @ApiResponse({ status: 201, type: Boolean, description: 'Adds a follower' })
    follow(@Body() followProfileDto: FollowProfileDto): boolean{
        return true;
    }

    @Delete('unfollow')
    @ApiResponse({ status: 204, type: Boolean, description: 'Remove a follower' })
    unfollow(@Body() followProfileDto: FollowProfileDto) : boolean{
        return true;
    }
}
