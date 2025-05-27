import React, { useState } from 'react';
import styles from './SubmitForm.module.css';
import { submitAdvertisement } from '../../entities/advertisement/api';
import { useUser } from '../../app/providers/UserProvider';
import { useNavigate } from 'react-router-dom';

function SubmitForm() {
  const { user } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await submitAdvertisement({ email: user.email, advertisement: { ...formData } });
    if (res.ok) {
      navigate('/catalog');
    } else {
      console.log();
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Submit ad</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <label className={styles.formLabel}>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className={styles.formInput}
          />
        </label>

        <label className={styles.formLabel}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className={styles.formTextarea}
          />
        </label>

        <label className={styles.formLabel}>
          Price:
          <div className={styles.priceContainer}>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className={`${styles.formInput} ${styles.priceInput}`}
            />
            <span className={styles.dollar}>$</span>
          </div>
        </label>

        <button
          type="submit"
          className={styles.formButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SubmitForm;
