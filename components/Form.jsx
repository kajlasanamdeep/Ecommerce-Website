import axios from 'axios';
import React from 'react';
import styles from '../styles/Form.module.css'
const Form = () => {
  const onSubmitHandler = async (event) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      }
    };
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await axios.post('/api/register', formData, config);
    event.target.reset();
    console.log('response', response.data);
  };
  return (
    <div className={styles.grid}>
    <form className={styles.grid} onSubmit={onSubmitHandler} encType='multipart/form-data'>
      <div className={styles.card}>
        <label htmlFor='Profile' className={styles.code}>
          Choose Your Profile Image
        </label>
        <input className={styles.container} type='file' name='Profile' />
      </div>
      <br/>
      <div className={styles.card}>
      <label htmlFor='email' className={styles.code}>
        Enter Your Email Here
      </label>
        <input className={styles.container} type='email' name='email' />
      </div>
      <input className={styles.card} type='submit' value='submit' />
    </form>
    </div>
  )
};
export default Form;
