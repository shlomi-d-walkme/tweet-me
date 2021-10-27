import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  
} from '@material-ui/core';

import { useHistory } from "react-router-dom";

import styles from './login.page.module.scss';

import {useLogin} from './use.login.hook';

export function LoginPage() {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authflag, setAuthflag] = useState(1);
   
    const {data, loading, doLogin}  = useLogin();
    const history = useHistory();
  

    if (data){
        
        window.localStorage.setItem('user', JSON.stringify(data));
        history.push("/feed");
    }else{
        console.log('No Data');
    }    

    const handleChangeUser = (event: any) => {
        console.log(event.target.value);
        setUsername(event.target.value);
        
    }

    const handleChangePassword = (event: any) => {
        
        setPassword(event.target.value);
    }
  
  const handleSubmit = (event: any) =>{
    event.preventDefault();
    doLogin(username);
   
    // if (
    //   state.username == "admin@littech.in" &&
    //   state.password == "secret"
    // ) {
    //   props.history.push("/home");
    // } else {
    //   alert("Incorrect Credntials!");
    // }
  }

    return (
      <div>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className={styles["login-form"]}
            >
              <Paper
                variant="elevation"
                elevation={2}
                className={styles["login-background"]}
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={username}
                          onChange={handleChangeUser}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={password}
                          onChange={handleChangePassword}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className={styles["button-block"]}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

