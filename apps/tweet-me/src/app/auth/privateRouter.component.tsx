import { Redirect, Route, RouteProps } from 'react-router-dom';

import { useAuth } from './use.auth.hook';

export function PrivateRoute(props:RouteProps) {
    const { authed } = useAuth();
  
    if(!authed) return <Redirect
      to="/login"
      
    />;

    return <Route {...props}/>;
  }