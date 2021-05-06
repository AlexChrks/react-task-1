import React from 'react';
import styles from './FormInput.module.scss';


export function FormInput({type, placeholder, name, handleChange, value, hasError, errorMessage, handleBlur}) {

  return (
    <>
      <input value={value} type={type} placeholder={placeholder} name={name} onChange={handleChange} onBlur={handleBlur} />
      {hasError && <div className={styles.invalidValue}>{errorMessage}</div>}
    </>
  )
}