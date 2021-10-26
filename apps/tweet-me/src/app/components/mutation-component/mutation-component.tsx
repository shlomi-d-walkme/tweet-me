import { gql, useMutation } from '@apollo/client';
import './mutation-component.module.scss';
  
/* eslint-disable-next-line */
export interface MutationComponentProps {
}

export function MutationComponent(props: MutationComponentProps) {

  let {add, loading } = useAddFollowers();

  return (
    <div>
      <button onClick={() => add()}>Add</button>
    </div>
  );
};

export default MutationComponent;



export function useAddFollowers() {
  const followersGql = gql`
    mutation Mutation($profileId: String!, $followProfileId: String!) {
      followUser(
        followProfileId: $profileId
        profileId: $followProfileId
      )
    }
  `;

  const [addFolowes, {data, loading, error}] = useMutation<FollowUser, FollowUserVars>(followersGql);

  const add = (followVars = { profileId: "2", followProfileId: "3" }) => {  
    addFolowes({
        variables: followVars

    });
  }

  return { add, loading };
}

export interface FollowUserVars {
  profileId: string,
  followProfileId: string
}
export interface FollowUser {
  followUser: boolean
}