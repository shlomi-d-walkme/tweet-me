import { Module } from '@nestjs/common';
import { FollowsResolver } from './follows.resolver';
import { FollowsService } from './follows.service';
import { GreetingResolver } from './greeting.resolver';

@Module({providers:[
    GreetingResolver,
    FollowsResolver,
    FollowsService
], exports:[
    GreetingResolver,
    FollowsResolver
]})
export class FollowsModule {}