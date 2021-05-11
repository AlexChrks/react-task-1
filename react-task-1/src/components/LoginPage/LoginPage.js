import React from 'react';
import styles from './LoginPage.module.scss';

export function LogInForm({loginHandler}) {

  return (
    <form className={styles.loginForm} onSubmit={loginHandler}>
      <h3 className={styles.loginHeader}>Please, Sign in</h3>
      <input placeholder='login'/>
      <input placeholder='password'/>
      <button className={styles.btnPrimary} type='submit'>Sign in</button>
    </form>
  );
}