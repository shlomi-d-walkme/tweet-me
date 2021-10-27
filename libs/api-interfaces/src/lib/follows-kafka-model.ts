export enum FOLLOWS_ACTION {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW"
}

export class FollowsKafkaModel {

  constructor(profileId: string,
    followerId: string,
    action: FOLLOWS_ACTION) {
      this.profileId = profileId;
      this.action = action; 
      this.followerId = followerId;
  }

  profileId: string; 
  action: FOLLOWS_ACTION;
  followerId: string
}
