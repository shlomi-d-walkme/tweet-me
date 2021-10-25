export enum FOLLOWS_ACTION {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW"
}

export class FollowsKafkaModel {

  constructor(profileId: string,
    action: FOLLOWS_ACTION) {
      this.profileId = profileId;
      this.action = action; 
  }

  profileId: string; 
  action: FOLLOWS_ACTION;
}
