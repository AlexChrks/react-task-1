import React from 'react';
import styles from './Header.module.scss';

export function Header({ user }) {
  return (
    <header className={styles.header} >
      <h3 className={styles.sectionName}>Header</h3>
      <h1 className={styles.heading}>Hello, {user.firstName} {user.lastName}!</h1>
    </header>
  );
};
