import { Module } from '@nestjs/common';
import { ProfileSdkService } from './profile-sdk/profile-sdk.service';
import { ProfileResolver } from './profile.resolver';

@Module({providers: [ProfileSdkService, ProfileResolver], exports:[ProfileResolver]})
export class ProfileModule {}
