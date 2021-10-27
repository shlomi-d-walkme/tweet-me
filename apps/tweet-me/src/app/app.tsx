import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./auth/privateRouter.component";

import { FeedContainer } from './feedContainer/feedContainer.component'
import { LoginPage } from "./pages/loginPage/login.page";
import { RegisterForm } from './register-form/register-form.component';
import style from './app.module.scss';

export const App = () => {
  return (
    <div className={style.app}>
      <header className={style.header}> 
            <img 
              src="assets/tweet-me-logo.jpg"
              alt="TweetMe Logo"
            />
      </header>
      <main className={style.main}>

        <Router>
          <Switch>
            <Route path="/login">
                <LoginPage></LoginPage>
            </Route>

            <Route path="/register">
              <RegisterForm></RegisterForm>
            </Route>

            <PrivateRoute path="/feed">
              <FeedContainer></FeedContainer>
            </PrivateRoute>

            <PrivateRoute path="/users">

            </PrivateRoute>

          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
