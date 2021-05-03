import React from 'react';
import styles from './FormInput.module.scss';


export function FormInput({type, placeholder, name, handleChange, newCard, validator, inputErrors}) {

  return (
    <>
    <input value={newCard[name]} type={type} placeholder={placeholder} name={name} onChange={handleChange} onBlur={validator}/>
    {inputErrors[name] && <div className={styles.invalidValue}>{inputErrors[name]}</div>}
    </>
  )
}