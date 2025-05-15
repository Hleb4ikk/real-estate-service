'use client';

import styles from './Switch.module.css';

const Switch = ({ className, onChange, checked, ref, ...props }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        onChange={onChange}
        ref={ref}
        {...props}
      />
      <span className={`${styles.slider} ${styles.round} ${className}`}></span>
    </label>
  );
};

export default Switch;
