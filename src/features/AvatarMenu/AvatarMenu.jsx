import { LogOut, CircleUser } from 'lucide-react';
import styles from './AvatarMenu.module.css';
import Button from '../../shared/components/Button/Button';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { deleteSession } from '../../entities/user/user';

const AvatarMenu = ({ avatar }) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild
        className={styles.trigger}
      >
        <Button>{avatar}</Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.menu}
          sideOffset={5}
        >
          <DropdownMenu.Item
            onClick={() => navigate('/profile')}
            className={styles.item}
          >
            <CircleUser size={20} />
            My account
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={styles.separator} />
          <DropdownMenu.Item
            onClick={() => {
              deleteSession();
              window.location.reload();
            }}
            className={styles.item}
          >
            <LogOut size={20} />
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default AvatarMenu;
