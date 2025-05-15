'use client';

import Button from '../Button/Button';
import styles from './Menu.module.css';

const MenuItem = ({ children, onClick, ...props }) => {
  return (
    <li>
      <Button
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
    </li>
  );
};

const Menu = ({ children, className, ...props }) => {
  return (
    <ul
      className={`${className} ${styles.container}`}
      {...props}
    >
      {children}
    </ul>
  );
};

export { Menu, MenuItem };
