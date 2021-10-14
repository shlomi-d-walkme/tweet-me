import { Module } from '@nestjs/common';
import { GreetingResolver } from './greeting.resolver';

@Module({providers:[
    GreetingResolver
], exports:[
    GreetingResolver
]})
export class FollowsModule {}