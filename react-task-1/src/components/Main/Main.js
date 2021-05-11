import React, { useState, useContext, createContext } from 'react';
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
  useLocation
} from "react-router-dom";

export function Main() {

  const fakeAuth = {
    isAuthenticated: false,
    signIn(callback) {
      fakeAuth.isAuthenticated = true;
      setTimeout(callback, 100);
    },
    signOut(callback) {
      fakeAuth.isAuthenticated = false;
      setTimeout(callback, 100);
    }
  };
  
  const authContext = createContext();

  function useProvideAuth() {
    const [user, setUser] = useState(null);
  
    const signIn = callback => {
      return fakeAuth.signIn(() => {
        setUser("user");
        callback();
      });
    };
  
    const signOut = callback => {
      return fakeAuth.signOut(() => {
        setUser(null);
        callback();
      });
    };
  
    return {
      user,
      signIn,
      signOut
    };
  }
  
  function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
      <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
  }
  
  function useAuth() {
    return useContext(authContext);
  }
  
  function AuthButton() {
    let history = useHistory();
    let auth = useAuth();
  
    return auth.user ? (
      <p className={styles.greeting}>
        Welcome!
        <button
          className={styles.btnSignOut}
          onClick={() => {
            auth.signOut(() => history.push("/"));
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
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
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
  
  function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
  
    let { from } = location.state || { from: { pathname: "/" } };
    let loginHandler = (e) => {
      e.preventDefault();
      auth.signIn(() => {
        history.replace(from);
        history.push('/profile')
      });
    };
  
    return (
      <div>
        <LogInForm loginHandler={loginHandler}></LogInForm>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      
    <ProvideAuth>
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
              <LoginPage />
            </Route>

          </Switch>
        </div>
      </Router>
    </ProvideAuth>

    </main>
  );
}
