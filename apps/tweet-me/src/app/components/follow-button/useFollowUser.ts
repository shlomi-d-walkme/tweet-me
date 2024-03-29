import { gql, useMutation } from "@apollo/client";

export interface FollowUserVars {
    profileId: string,
    followProfileId: string
  }
  
export interface FollowUser {
    followUser: boolean
}
    
const FOLLOW_USER = gql`
mutation FollowUser($profileId: String!, $followProfileId: String!) {
    followUser(profileId: $profileId, followProfileId: $followProfileId) {
        following
        profileId
    }
}
`;


    
export function useFollowUser() {
    const [followUser, { data, loading, error }] = useMutation<FollowUser, FollowUserVars>(FOLLOW_USER,{
        update(cache, data){
            console.log("update data:",data);
        }
    });

    const follow = (profileId: string, followProfileId: string) => {
        followUser({
        variables: {
            profileId,
            followProfileId
        }
        });
    }

    return {
        follow, data, loading, error
    }
}