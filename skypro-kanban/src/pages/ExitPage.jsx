import { useNavigate } from 'react-router-dom';
import PopExit from '../components/popups/PopExit.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export default function ExitPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleConfirm() {
    logout();
    navigate('/login', { replace: true });
  }

  return <PopExit onConfirm={handleConfirm} onCancel={() => navigate('/')} />;
}
