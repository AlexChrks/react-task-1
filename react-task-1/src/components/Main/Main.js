import React from 'react';
import styles from './Main.module.scss';

import { CardsContainer } from '../Cards/CardsContainer/index.js';
import { LogInForm } from '../LoginPage/LoginPage';
import { ProfilePage } from '../ProfilePage/ProfilePage.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import { signOut } from '../../store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux';

export function Main() {
  
  const fakeAuth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  
  function AuthButton() {
    let history = useHistory();
  
    return fakeAuth.isAuthenticated ? (
      <p className={styles.greeting}>
        Welcome!
        <button
          className={styles.btnSignOut}
          onClick={() => {
            dispatch(signOut());
            history.push("/");
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <>
        <p className={styles.helper}>You are not logged in.</p>
      </>
    );
  }
  
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  return (
    <main className={styles.main}>

        <Router>
          <div className={styles.container}>
            <AuthButton />
            <ul className={styles.list}>
              <li>
                <Link className={styles.links} to="/profile">Profile</Link>
              </li>
              <li>
                <Link className={styles.links} to="/cards">Cards</Link>
              </li>
            </ul>

            <Switch>

              <PrivateRoute path="/profile">
                <ProfilePage />
              </PrivateRoute>

              <PrivateRoute path="/cards">
                <CardsContainer />
              </PrivateRoute>

              <Route path={["/", "/login"]}>
                <LogInForm />
              </Route>

            </Switch>
          </div>
        </Router>

    </main>
  );
}
