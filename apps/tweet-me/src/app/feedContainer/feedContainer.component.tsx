import './feedContainer.module.scss';
import { Feed } from '../feed/feed.component';
import { Tweet } from '../tweet/tweet.component';
import React, { useEffect, useState } from 'react';
import {
  useQuery,
  gql
} from "@apollo/client";


const QUERY = gql`query {
  feed(id:"asd") {
    id
    tweets{
      date
      content 
    }
  }
}`;



/* eslint-disable-next-line */
export interface FeedContainerProps {

}
export function FeedContainer(props: FeedContainerProps) {

//  feedPresentationApi.

const { loading, error, data } = useQuery(QUERY);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    console.log('ddd: ', data);
  return (
    <div>
      
      <Feed>
      {data.feed.tweets.map(({content, date}: any) => (<Tweet
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
