import './feedContainer.module.scss';
import { Feed } from '../feed/feed.component';
import { Tweet } from '../tweet/tweet.component';
import React, { useEffect, useState } from 'react';

const feedPresentationApi = new FeedPresentationApi();
/* eslint-disable-next-line */
export interface FeedContainerProps {

}
export function FeedContainer(props: FeedContainerProps) {

//  feedPresentationApi.
  const [feed, setFeed] = useState();
  return (
    <div>
      <Feed>
        <Tweet
          profileName="Dozi"
          text="My first tweet!!!"
          comments={['1', '2', '3']}
          time="Now"
        ></Tweet>
        <Tweet
          profileName="Shauli"
          text="Dozi is the best :)"
          comments={['1', '2', '3', '1', '2', '3']}
          time="1h"
        ></Tweet>
      </Feed>{' '}
    </div>
  );
}

export default FeedContainer;
