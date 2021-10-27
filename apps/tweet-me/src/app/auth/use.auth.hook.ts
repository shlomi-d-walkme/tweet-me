import { getStorage, setStorage } from "./utils";
import {useState} from 'react';

const LOGIN_KEY = 'login_key';

const isLoggedIn = getStorage(LOGIN_KEY);

export function useAuth() {
  const [authed, setAuthedState] = useState(isLoggedIn);

    const setAuthed = () => {
        setStorage(LOGIN_KEY, true);
        setAuthedState(true);
    } 

  return {
    authed,
    setAuthed
  };
}