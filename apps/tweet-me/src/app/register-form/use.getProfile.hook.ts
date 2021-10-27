import {
    useQuery,
    gql
  } from "@apollo/client";
  
  interface ProfileQuery {
    profile: {
      email:string;
      name:string;
    }
  }
  
  interface ProfileQueryVars {
    id: string;
  }


  


  export function useGetProfile(profileId: string){
    const { data, loading, error } = useQuery<ProfileQuery, ProfileQueryVars>(
      gql`
        query Query($id: String!) {
          profile(id: $id) {
            email 
            name
          }
        }
      `, {
        variables: { id: profileId}
      
    });
    return {data, loading, error}
  }