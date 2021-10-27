import {
    useQuery,
    gql
  } from "@apollo/client";
  
const QUERY = gql`query Query($profileId: String!){
    feed(id:$profileId) {
      id
      tweets{
        date
        content 
      }
    }
  }`;
  
  interface FeedQuery {
    feed: {
    id: string,
    tweets: {date: string, content: string}[]  
    }
  }

  export function useGetFeed(profileId: string){
    const { loading, error, data } = useQuery<FeedQuery>(QUERY, {variables: {profileId}});
    const feed = data?.feed;
    return {feed, loading, error}
  }