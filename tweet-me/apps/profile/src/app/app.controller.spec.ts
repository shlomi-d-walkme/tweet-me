import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileDto } from './dto/profile.dts';
import { Profile } from './entities/profile.entity';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('register', () => {
    it('a new profile is creatrd', () => {
      const appController = app.get<AppController>(AppController);
      const profileDts= new ProfileDto('test@email.com','bob','smith','pass','bob');

      appController.register(profileDts);

      expect(appController.getProfiles().length).toEqual(1);
      expect(appController.getProfile("")).toEqual(Profile.convertToEntity(profileDts));
    });
  });

  describe('profiles', () => {
    it('get profiles', () => {
      const appController = app.get<AppController>(AppController);
      const profileDts= new ProfileDto('test@email.com','bob','smith','pass','bob');
      appController.register(profileDts);
      const profileDts1= new ProfileDto('test1@email.com','bob1','smith1','pass1','bob1');
      appController.register(profileDts1)
      expect(appController.getProfiles().length).toEqual(2);
    });
  });

  describe('profile', () => {
    it('get profile', () => {
      const appController = app.get<AppController>(AppController);
      const profileDts= new ProfileDto('test@email.com','bob','smith','pass','bob');
      const res=appController.register(profileDts);
      const profileDts1= new ProfileDto('test1@email.com','bob1','smith1','pass1','bob1');
      const res1=appController.register(profileDts1)
      expect(appController.getProfiles().length).toEqual(2);
    });
  });
});
