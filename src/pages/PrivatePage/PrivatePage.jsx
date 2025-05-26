import { Navigate } from 'react-router-dom';
import { useUser } from '../../app/providers/UserProvider';

const PrivatePage = ({ children }) => {
  const { user } = useUser();

  return user ? <>{children}</> : <Navigate to="/auth" />;
};

export default PrivatePage;
