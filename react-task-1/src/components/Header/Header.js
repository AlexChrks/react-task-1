import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';

export function Header() {

  const userInfo = useSelector((state) => state.userInfoReducer.user);

  return (
    <header className={styles.header} >
      <h3 className={styles.sectionName}>Header</h3>
      <h1 className={styles.heading}>Hello, {userInfo.firstName} {userInfo.lastName}!</h1>
    </header>
  );
}
