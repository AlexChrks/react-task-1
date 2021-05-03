import React, { useEffect, useState, useRef } from 'react';
import {FormInput} from './FormInput/FormInput.js';
import {inputs} from './FormInput/inputsData.js'; 
import styles from './CardsCreationForm.module.scss';

export function CardsCreationForm({handleChange, handleSubmit, newCard}) {

  const [inputErrors, setInputErrors] = useState({});
  const [formValidness, setFormValidness] = useState(false);
  
  useEffect(() => {
    if (Object.keys(inputErrors).length) {
      setFormValidness(false);
    } else {
      setFormValidness(true);
    }
  }, [inputErrors]);

  const validator = (e) => {
    if (e.target.value === '') {
      setInputErrors({
        ...inputErrors,
        [e.target.name]: `${e.target.name} is required`
      })
    } else {
      setInputErrors({});
    }
  }

  return (
    <form className={styles.creationForm} onSubmit={handleSubmit}>

      <h1 className={styles.heading}>Add card</h1>
      {inputs.map((input, key) => {
        return (
          <FormInput 
          type={input.type} 
          placeholder={input.placeholder} 
          name={input.name} 
          handleChange={handleChange} 
          key={key} 
          newCard={newCard}
          validator={validator}
          inputErrors={inputErrors}
          />
        );
      })}
      
      <button disabled={!formValidness} type="submit" className={styles.btnPrimary}>Submit</button>
    </form>
  );
}
