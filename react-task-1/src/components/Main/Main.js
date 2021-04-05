import React from 'react';
import styles from './Main.module.scss';

const Main = ({store}) => {
  return (
    <main className={styles.main}>
      <h3 className={styles.sectionName}>Main</h3>
      <img src={store.avatar.image} alt={store.avatar.alt}></img>
    </main>
  );
};

export default Main;
