'use client';

import styles from './NavigationMenu.module.css';
import { MenuItem, Menu } from '../basic/Menu/Menu';
import { useNavigate } from 'react-router-dom';

const NavigationItem = ({ path, children }) => {
  if (!path) {
    throw new Error('NavigationItem must have path');
  }
  const navigate = useNavigate();

  return <MenuItem onClick={() => navigate(path)}>{children}</MenuItem>;
};

const NavigationItemList = ({ navigationItems = [] }) => {
  return (
    <>
      {navigationItems.map((item) => (
        <NavigationItem path={item.path}>{item.content}</NavigationItem>
      ))}
    </>
  );
};

const NavigationMenu = ({ children }) => {
  return (
    <nav>
      <Menu className={styles.menuContainer}>{children}</Menu>
    </nav>
  );
};

export { NavigationMenu, NavigationItemList };
