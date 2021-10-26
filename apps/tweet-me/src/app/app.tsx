import React, { useEffect, useState } from 'react';
import AmirComponent from './components/amir-component/amir-component';
import MutationComponent from './components/mutation-component/mutation-component';
import { FeedContainer } from './feedContainer/feedContainer.component';
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
      <FeedContainer></FeedContainer>
    </>
  );
};

export default App;
