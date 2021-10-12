import React, { useEffect, useState } from 'react';
import { Message } from '@tweet-me/api-interfaces';
import {FeedComponent} from './feedComponent/feed.component';

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
      <FeedComponent></FeedComponent>
      <div>{m.message}</div>
    </>
  );
};

export default App;
