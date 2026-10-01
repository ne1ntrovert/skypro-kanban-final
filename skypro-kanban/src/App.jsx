import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './app/AppRoutes.jsx';
import { AuthContext, useAuthState } from './context/AuthContext.jsx';
import { TaskContext, useTaskState } from './context/TaskContext.jsx';
import { GlobalStyle } from './theme/GlobalStyle.js';
import { AppThemeProvider, useThemeMode } from './theme/ThemeContext.jsx';

function Providers() {
  const auth = useAuthState();
  const tasksValue = useTaskState(auth.token, auth.isAuth, auth.logout);
  const { mode } = useThemeMode();

  return (
    <BrowserRouter>
      <AuthContext.Provider value={auth}>
        <TaskContext.Provider value={tasksValue}>
          <GlobalStyle />
          <AppRoutes />
          <ToastContainer position="bottom-right" autoClose={3500} theme={mode} />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AppThemeProvider>
      <Providers />
    </AppThemeProvider>
  );
}
