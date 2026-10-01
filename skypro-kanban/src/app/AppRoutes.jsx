import { matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import ExitPage from '../pages/ExitPage.jsx';
import EditTaskPage from '../pages/EditTaskPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import MainPage from '../pages/MainPage.jsx';
import NewTaskPage from '../pages/NewTaskPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import ViewTaskPage from '../pages/ViewTaskPage.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

const MODAL_PATHS = ['/card/create', '/card/:id/edit', '/card/:id', '/exit'];

export default function AppRoutes() {
  const location = useLocation();
  const { isAuth } = useAuth();

  const isModal = MODAL_PATHS.some((path) => matchPath(path, location.pathname));
  // Попапы всегда открываются поверх главной страницы, в том числе при прямом заходе по ссылке
  const pageLocation = isModal ? { pathname: '/' } : location;

  return (
    <>
      <Routes location={pageLocation}>
        <Route path="/" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
        <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {isModal && isAuth && (
        <Routes>
          <Route path="/card/create" element={<NewTaskPage />} />
          <Route path="/card/:id/edit" element={<EditTaskPage />} />
          <Route path="/card/:id" element={<ViewTaskPage />} />
          <Route path="/exit" element={<ExitPage />} />
        </Routes>
      )}
    </>
  );
}
