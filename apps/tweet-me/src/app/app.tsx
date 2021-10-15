import React, { useEffect, useState } from 'react';
import {Feed} from './feed/feed.component';
import { Tweet } from './tweet/tweet.component';
import { RegisterForm } from './register-form/register-form.component';


export const App = () => {
 
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
      <RegisterForm></RegisterForm>

      <Feed>
      <Tweet profileName='Dozi' text='My first tweet!!!' comments={['1','2','3']} time='Now'></Tweet>
      <Tweet profileName='Shauli' text='Dozi is the best :)' comments={['1','2','3','1','2','3']} time='1h'></Tweet>

      </Feed>
    </>
  );
};

export default App;
