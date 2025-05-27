import styles from './SubmitPage.module.css';

import useTitleDivision from '../../shared/hooks/useTitleDivision';
import { useUser } from '../../app/providers/UserProvider';
import { Navigate } from 'react-router-dom';
import SubmitForm from '../../features/SubmitForm/SubmitForm';
export default function SubmitPage() {
  useTitleDivision('Submit');

  const { user } = useUser();

  if (user.role !== 'realtor') {
    return <Navigate to="/" />;
  } else {
    return (
      <div className={styles.formContainer}>
        <SubmitForm />
      </div>
    );
  }
}
