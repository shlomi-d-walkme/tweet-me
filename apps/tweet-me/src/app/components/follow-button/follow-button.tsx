import React, { useEffect, useState } from 'react';
import css from './follow-button.module.scss';
import { useMutation, gql } from "@apollo/client";

// const FOLLOW_MUTATION = gql`mutation {
//   followUser(profileId: $profileId, followProfileId: $followProfileId)
// }`;

// const UNFOLLOW_MUTATION = gql`mutation {
//   followUser(profileId: $profileId, followProfileId: $unfollowProfileId)
// }`;

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

    // const [ data ] = useMutation(FOLLOW_MUTATION);

    const action = isFollowingState ? "unfollow": "follow";
    const method = isFollowingState ? "DELETE": "POST";

    const requestOptions = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };

    fetch(`/api/follows/1/${action}/2`, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          // isFollowing = !isFollowing;
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
