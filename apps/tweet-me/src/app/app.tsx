import { FeedContainer } from './feedContainer/feedContainer.component';
import { RegisterForm } from './register-form/register-form.component';

export const App = () => {

  
  
  return (
    <>
      <div style={{ textAlign: 'center' }}>
      <img
          width="200"
          src="assets/logo.jpeg"
          alt="TweetMe logo"
        />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Welcome to</h1>
          <img 
            width="auto"
            height="87px"
            src="assets/tweet-me-logo.jpg"
            alt="TweetMe"
          />
        </div>
      </div>
      <RegisterForm></RegisterForm>
      <FeedContainer></FeedContainer>
    </>
  );
};

export default App;
