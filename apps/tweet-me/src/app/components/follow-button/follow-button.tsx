import React, { useEffect, useState } from 'react';
import css from './follow-button.module.scss';

export interface FollowButtonProps {
  isFollowing: boolean
}

export function FollowButton({ isFollowing }: FollowButtonProps) {
  const [isFollowingState, setIsFollowing] = useState(isFollowing);

  const buttonText = isFollowingState ? "Unfollow": "Follow";

  function onFollowClicked() {
    setIsFollowing(!isFollowingState);
  }

  useEffect(() => {
    if(isFollowing === isFollowingState) return; //Need to think about another workaround
    const action = isFollowingState ? "unfollow": "follow";
    const method = isFollowingState ? "DELETE": "POST";

    const requestOptions = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`/api/follows/1/${action}`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log("ERROR" + error);
        }
      );
  }, [isFollowingState]);

  return (
    <div>
      <button onClick={onFollowClicked} className={css.followButton}>{buttonText}</button>
    </div>
  );
}

export default FollowButton;
