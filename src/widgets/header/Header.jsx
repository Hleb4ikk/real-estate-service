import styles from './Header.module.css';
import { NavigationMenu, NavigationItemList } from '../../features/NavigationMenu/NavigationMenu';
import Image from '../../shared/components/Image/Image';
import logo from '../../shared/assets/logo.svg';
import Avatar from '../../shared/components/Avatar/Avatar';

import ThemeSwitch from '../../features/ThemeSwitch/ThemeSwitch';
import Button from '../../shared/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../app/providers/UserProvider';
import AvatarMenu from '../../features/AvatarMenu/AvatarMenu';

export default function Header() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <header>
      <div className={styles.contentContainer}>
        <Image
          className={styles.logo}
          src={logo}
        />
        <div className={styles.menuContainer}>
          <NavigationMenu>
            <NavigationItemList />
          </NavigationMenu>
          {user?.role === 'realtor' && (
            <Button
              onClick={() => navigate('/submit')}
              className={styles.createAdButton}
            >
              Submit Ad
            </Button>
          )}
          <ThemeSwitch />
          {user ? (
            <AvatarMenu
              avatar={
                <Avatar
                  alt="avatar"
                  username={user.email}
                />
              }
            >
              <Button>Profile</Button>
            </AvatarMenu>
          ) : (
            <Button
              onClick={() => navigate('/auth')}
              className={styles.logInButton}
            >
              Log In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
