import React from 'react';
import styles from './Header.module.scss';

const Header = ({store}) => {
  return (
    <header className={styles.header} >
      <h3 className={styles.sectionName}>Header</h3>
      <h1 className={styles.heading}>Hello, {store.user.firstName} {store.user.lastName}!</h1>
    </header>
  );
};

export default Header;
