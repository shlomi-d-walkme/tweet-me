import { Module } from '@nestjs/common';
import { FollowsResolver } from './follows.resolver';
import { GreetingResolver } from './greeting.resolver';

@Module({providers:[
    GreetingResolver,
    FollowsResolver
], exports:[
    GreetingResolver,
    FollowsResolver
]})
export class FollowsModule {}