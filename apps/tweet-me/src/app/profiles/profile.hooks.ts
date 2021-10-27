import {gql, useMutation, useQuery } from "@apollo/client";
import { profile } from "console";



export const useAllProfiles = () => {
    const { data, loading, error } = useQuery<{allProfiles: {userName:string, _id:string}[]}>(
    gql`
        query {
          allProfiles{
           userName
           _id
         }
         }
        `);
    return { profiles: data?.allProfiles.map(({userName, _id})=>({userName, profileId:_id})), loading, error } ;
}

export const useGetFollowing = (profileId: string) => {
    const { data, loading, error } = useQuery<{getFollowInfo: {following:string[]}}>(
    gql`
        query {
            getFollowInfo(profileId: "${profileId}") {
                following
              }
         }
        `);
    return { following: data?.getFollowInfo.following, loading, error } ;
}


export const useLoggedInProfileId = () => ({loggedIn:true, profileId:'617906f36b0f9277c25a8fb8'})