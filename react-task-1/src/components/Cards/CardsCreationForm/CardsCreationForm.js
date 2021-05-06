import React from 'react';
import {FormInput} from './FormInput/FormInput.js';
import styles from './CardsCreationForm.module.scss';

export function CardsCreationForm({handleChange, handleSubmit, newCard, handleBlur}) {

  return (
    <form className={styles.creationForm} onSubmit={handleSubmit}>

      <h1 className={styles.heading}>Add card</h1>
      {Object.entries(newCard).map((input, key) => {
        return (
          <FormInput 
          type={input[1].type} 
          placeholder={input[1].placeholder} 
          name={input[1].name} 
          handleChange={handleChange} 
          key={key} 
          value={input[1].value}
          hasError={input[1].hasError}
          errorMessage={input[1].errorMessage}
          handleBlur={handleBlur}
          />
        );
      })}
      
      <button type="submit" className={styles.btnPrimary}>Submit</button>
    </form>
  );
}
