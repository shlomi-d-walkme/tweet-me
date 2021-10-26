import { useQuery, gql } from '@apollo/client';
import './amir-component.module.scss';
  
/* eslint-disable-next-line */
export interface AmirComponentProps { }

export function AmirComponent(props: AmirComponentProps) {

  let {data, loading, error} = useGetTweets({profileId: "2"});

  if (loading) return <div>loading</div>;
  if (error) return <div>Error!</div>

  return (
    <div>
      {data?.tweet.map((t) => (
        <h1>{t.content} - {t.id}</h1>
      ))}
    </div>
  );
};

export function useGetTweets(tweetVar: TweetsVar) {
  
  const {data, loading, error} = useQuery<TweetsQuery, TweetsVar>(gql`
    query Query($profileId:String!){
      tweet(id: $profileId) {
        id
        content
      }
    }
  `, {variables: tweetVar });

  return {data, loading, error};
}

export default AmirComponent;

interface TweetsQuery {
  tweet: {
    id: string,
    content: string 
  }[]
}

interface TweetsVar {
  profileId: string
}