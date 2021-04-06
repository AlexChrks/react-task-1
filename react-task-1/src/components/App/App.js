import React from 'react';
import {Header} from '../Header/index.js';
import {Main} from '../Main/index.js';
import {Footer} from '../Footer/index.js';
import styles from './App.module.scss';

export function App({store}) {
  return (
    <div className={styles.app}>
      <Header user={store.user} />
      <Main avatar={store.avatar} />
      <Footer />
    </div>
  );
}
