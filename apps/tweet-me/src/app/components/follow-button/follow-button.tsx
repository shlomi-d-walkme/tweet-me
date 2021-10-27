import { useState } from 'react';
import css from './follow-button.module.scss';
import { useFollowUser } from './useFollowUser';
import { useUnfollowUser } from './useUnfollowUser';

export interface FollowButtonProps {
  isFollowing: boolean,
  profileId?: string
}

export function FollowButton({ isFollowing, profileId }: FollowButtonProps) {
  const [isFollowingState, setIsFollowing] = useState(isFollowing);
  const { follow, loading: followingLoading } = useFollowUser();
  const { unfollow, loading: unfollowingLoading } = useUnfollowUser();

  const buttonText = isFollowingState ? "Unfollow": "Follow";

  function onFollowClicked() {
    isFollowingState ? unfollow("1", "2") : follow("1", "2");
    
    setIsFollowing(!isFollowingState);
  }

  if(followingLoading) return <div>Sending request...</div>
  if(unfollowingLoading) return <div>Sending request...</div>

  return (
    <div>
      <button onClick={onFollowClicked} className={css.followButton}>{buttonText}</button>
    </div>
  );
}