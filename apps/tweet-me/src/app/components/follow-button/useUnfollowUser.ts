import { gql, useMutation } from "@apollo/client";

export interface UnfollowUserVars {
    profileId: string,
    unfollowProfileId: string
  }
  
export interface UnfollowUser {
    unfollowUser: boolean
}
    
const UNFOLLOW_USER = gql`
mutation UnfollowUser($profileId: String!, $unfollowProfileId: String!) {
    unfollowUser(profileId: $profileId, unfollowProfileId: $unfollowProfileId)
}
`;
    
export function useUnfollowUser() {
    const [unfollowUser, { data, loading, error }] = useMutation<UnfollowUser, UnfollowUserVars>(UNFOLLOW_USER);

    const unfollow = (profileId: string, unfollowProfileId: string) => {
        unfollowUser({
        variables: {
            profileId,
            unfollowProfileId
        }
        });
    }

    return {
        unfollow, data, loading, error
    }
}