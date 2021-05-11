import React from 'react';
import styles from './ProfilePage.module.scss';

export function ProfilePage({isSignedIn, handleSignIn}) {

  return (
    <div className={styles.profileContainer}>
      <p>First name: Alexey</p>
      <p>Last name: Cherkas</p>
      <p>email: alexey.cherkas1997@gmail.com</p>

    </div>
  );
}