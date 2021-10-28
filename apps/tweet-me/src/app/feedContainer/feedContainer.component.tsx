import './feedContainer.module.scss';
import { Feed } from '../feed/feed.component';
import { Tweet } from '../tweet/tweet.component';
import {NewTweet} from '../newTweet/newTweet.component';
import { gql } from "@apollo/client";
import {useGetFeed} from './use.feed.hook';
import { useAuth } from '../auth/use.auth.hook';


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




/* eslint-disable-next-line */
export interface FeedContainerProps {

}
export function FeedContainer(props: FeedContainerProps) {

//  feedPresentationApi.

const {authed} = useAuth();

const { loading, error, feed } = useGetFeed( authed.profileByEmail['_id']);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <NewTweet></NewTweet>
      <Feed>
      {feed?.tweets.map(({content, date}) => (<Tweet
          profileName={`Dozi`} 
          text={content}
          comments={['1', '2', '3']}
          time={date}
        ></Tweet>))}
      </Feed>
    </div>
  );
}

export default FeedContainer;
