'use client';

import styles from './NavigationMenu.module.css';
import { MenuItem, Menu } from '../../shared/components/Menu/Menu';
import { useLocation, useNavigate, useParams, useRoutes } from 'react-router-dom';
import { routes } from '../../shared/helpers/routes';

const NavigationItem = ({ path, children, className }) => {
  if (!path) {
    throw new Error('NavigationItem must have path');
  }
  const navigate = useNavigate();

  return (
    <MenuItem
      className={className}
      onClick={() => navigate(path)}
    >
      {children}
    </MenuItem>
  );
};

const NavigationItemList = () => {
  const location = useLocation();

  return (
    <>
      {routes
        .filter(({ path }) => ['/catalog', '/agencies', '/contacts'].includes(path))
        .map(({ path, name }) => (
          <NavigationItem
            key={path}
            className={`${styles.link} ${location.pathname === path ? styles.activeLink : ''}`}
            path={path}
          >
            {name.en}
          </NavigationItem>
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
