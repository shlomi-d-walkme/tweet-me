import { getStorage, setStorage } from "./utils";
import {useState} from 'react';
import { makeVar, useReactiveVar } from "@apollo/client";


const LOGIN_KEY = 'login_key';

const loggedInProfile = getStorage(LOGIN_KEY);

const authVar = makeVar(loggedInProfile);

export function useAuth() {
  const authed = useReactiveVar(authVar);

    const setAuthed = (profile: any) => {
        setStorage(LOGIN_KEY, profile);
        authVar(profile);
    } 

  return {
    authed,
    setAuthed
  };
}