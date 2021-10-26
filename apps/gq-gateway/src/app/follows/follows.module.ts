import { Module } from '@nestjs/common';
import { FollowsResolver } from './follows.resolver';
import { FollowsService } from './follows.service';

@Module({providers:[
    FollowsResolver,
    FollowsService
], exports:[
    FollowsResolver
]})
export class FollowsModule {}