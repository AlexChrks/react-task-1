import React from 'react';
import styles from './Main.module.scss';

import { CardsContainer } from '../Cards/CardsContainer/index.js';

export function Main({ avatar }) {
  return (
    <main className={styles.main}>
      <h3 className={styles.sectionName}>Main</h3>
      <img src={avatar.image} alt={avatar.alt}></img>
      <CardsContainer />
    </main>
  );
}
