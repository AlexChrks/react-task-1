import React from 'react';
import styles from './Card.module.scss';

export function Card({ cardData, deleteCard }) {
  return (
    <div className={styles.card}>
      <button className={styles.btnClose} onClick={deleteCard} />
      <img className={styles.images} src={cardData.imageUrl} alt={cardData.type} />
      <h2>{cardData.type} {cardData.title}</h2>
      <h4>Price: {cardData.price}$</h4>
    </div>
  );
}
