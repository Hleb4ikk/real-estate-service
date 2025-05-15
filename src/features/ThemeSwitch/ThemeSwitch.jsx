'use client';

import { useTheme } from '../../app/providers/ThemeProvider';
import styles from './ThemeSwitch.module.css';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.switch}
      onClick={toggleTheme}
    >
      <div className={styles.iconContainer}>
        <Sun className={`${styles.icon} ${theme === 'dark' ? styles.hidden : ''}`} />
        <Moon className={`${styles.icon} ${theme === 'dark' ? '' : styles.hidden}`} />
      </div>
    </button>
  );
};

export default ThemeSwitch;
