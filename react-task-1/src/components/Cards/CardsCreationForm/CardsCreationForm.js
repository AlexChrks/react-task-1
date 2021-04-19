import React from 'react';
import styles from './CardsCreationForm.module.scss';

export function CardsCreationForm({ handleSubmit }) {
  return (
    <form className={styles.creationForm} onSubmit={(e) => { handleSubmit(e) }}>
      <h1 className={styles.heading}>Add card</h1>

      <input placeholder="Title"></input>

      <input placeholder="Type"></input>

      <input placeholder="Image url"></input>

      <input placeholder="Price"></input>

      <input placeholder="Country"></input>

      <button className={styles.btnPrimary}>Submit</button>
    </form>
  );
}
