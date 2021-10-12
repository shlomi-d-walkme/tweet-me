import React, { useEffect, useState } from 'react';
import { Message } from '@tweet-me/api-interfaces';
import {Feed} from './feed/feed.component';
import { Tweet } from './tweet/tweet.component';


export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to TweetMe!</h1>
        <img
          width="450"
          src="assets/logo.jpeg"
          alt="TweetMe logo"
        />
      </div>
      <Feed>
      <Tweet profileName='Dozi' text='My first tweet!!!' comments={['1','2','3']} time='Now'></Tweet>
      <Tweet profileName='Shauli' text='Dozi is the best :)' comments={['1','2','3','1','2','3']} time='1h'></Tweet>

      </Feed>
      <div>{m.message}</div>
    </>
  );
};

export default App;
