'use client';

import styles from './NavigationMenu.module.css';
import { MenuItem, Menu } from '../../shared/components/Menu/Menu';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../shared/helpers/routes';
const NavigationItem = ({ path, children }) => {
  if (!path) {
    throw new Error('NavigationItem must have path');
  }
  const navigate = useNavigate();

  return <MenuItem onClick={() => navigate(path)}>{children}</MenuItem>;
};

const NavigationItemList = () => {
  return (
    <>
      {routes
        .filter(({ path }) => ['/catalog', '/agencies', '/contacts'].includes(path))
        .map(({ path, name }) => (
          <NavigationItem path={path}>{name.ru}</NavigationItem>
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
