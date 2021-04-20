import React from 'react';
import styles from './CardsCreationForm.module.scss';

export function CardsCreationForm({handleSubmit, handleChange}) {
  return (
    <form className={styles.creationForm} onSubmit={handleSubmit}>

      <h1 className={styles.heading}>Add card</h1>

      <input placeholder="Title" name="title" required onChange={handleChange} />

      <input placeholder="Type" name="type" required onChange={handleChange}/>

      <input placeholder="Image url" name="imageUrl" required onChange={handleChange}/>

      <input placeholder="Price" name="price" required onChange={handleChange}/>

      <input placeholder="Country" name="country" required onChange={handleChange}/>

      <button className={styles.btnPrimary}>Submit</button>
    </form>
  );
}
