import { useFollowUser } from '../components/follow-button/useFollowUser';
import { useAllProfiles, useGetFollowing, useLoggedInProfileId } from './profile.hooks';
import './profiles.module.scss';
  

/* eslint-disable-next-line */
export interface ProfilesProps {
}



export function Profiles(props: ProfilesProps) {
  const { profiles, loading, error } = useAllProfiles();
  const {profileId} = useLoggedInProfileId();
  const {following} = useGetFollowing(profileId)
  const {follow} = useFollowUser();

    console.log(profiles)
    console.log(following)
    if (loading || !profiles) return <div>Loading....</div>
    if (error) return <div>{error}</div>

    const visibleProfiles = profiles.filter(({profileId:followingProfileId})=> 
      profileId !== followingProfileId &&
      following
        ? !following.includes(followingProfileId)
        : true
  )

  return (
    <div>
      <h1>Recomanded profiles!</h1>
      {visibleProfiles.map(({profileId:followId, userName}) =>
        <li key={`${userName}`}>
            {userName}
            <button type="button" onClick={() => follow(profileId, followId)}>Follow!</button>
        </li>
        )}
        <br/>
  
    </div>
  );
};


export default Profiles;
