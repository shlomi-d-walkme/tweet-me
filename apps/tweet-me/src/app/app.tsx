import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SignUpButton } from './components/sign-up-button/sign-up-button';
import { FeedContainer } from './feedContainer/feedContainer.component'
import { LoginPage } from "./pages/loginPage/login.page";
import { RegisterForm } from './register-form/register-form.component';

export const App = () => {
  return (
    <Router>
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

      <Switch>
        <Route path="/login">
            <LoginPage></LoginPage>
        </Route>

        <Route path="/register">
          <RegisterForm></RegisterForm>
        </Route>

        <Route path="/feed">
          <FeedContainer></FeedContainer>
        </Route>

        <Route path="/users">

        </Route>

       </Switch>
    </Router>
  );
};

export default App;
