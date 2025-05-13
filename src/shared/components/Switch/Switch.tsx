'use client';

import styles from './Switch.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Switch = ({ handleSwitch, ...props }) => {
  console.log(localStorage.getItem('theme'));
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  useEffect(() => {
    handleSwitch(theme);
  }, [theme, handleSwitch]);

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={theme === 'dark' ? true : false}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        {...props}
      />
      <span className={`${styles.slider} ${styles.round} `}></span>
    </label>
  );
};

export default Switch;
