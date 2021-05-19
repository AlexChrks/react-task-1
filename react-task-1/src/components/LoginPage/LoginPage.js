import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './LoginPage.module.scss';
import {signIn} from '../../store/actions/authActions';

import {
  useHistory,
} from "react-router-dom";

export function LogInForm() {
  let history = useHistory();
  const dispatch = useDispatch();

  function loginHandler(e) {
    e.preventDefault();
    dispatch(signIn());
    history.push("/profile");
  }

  return (
    <form className={styles.loginForm} onSubmit={loginHandler}>
      <h3 className={styles.loginHeader}>Please, Sign in</h3>
      <input placeholder='login'/>
      <input placeholder='password'/>
      <button className={styles.btnPrimary} type='submit'>Sign in</button>
    </form>
  );
}