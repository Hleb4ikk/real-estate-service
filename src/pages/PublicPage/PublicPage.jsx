import { Navigate } from 'react-router-dom';
import { useUser } from '../../app/providers/UserProvider';

const PublicPage = ({ children }) => {
  const { user } = useUser();

  return user ? <Navigate to="/catalog" /> : <>{children}</>;
};

export default PublicPage;
