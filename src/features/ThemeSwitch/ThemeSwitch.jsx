'use client';

import { useTheme } from '../../app/providers/ThemeProvider';
import styles from './ThemeSwitch.module.css';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.switch}
      onClick={toggleTheme}
    >
      <div className={styles.iconContainer}>
        <Sun className={`${styles.icon} ${theme === 'dark' ? styles.hidden : ''} ${className}`} />
        <Moon className={`${styles.icon} ${theme === 'dark' ? '' : styles.hidden}`} />
      </div>
    </button>
  );
};

export default ThemeSwitch;
