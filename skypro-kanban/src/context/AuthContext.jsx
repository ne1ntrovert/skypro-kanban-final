import { createContext, useContext, useState } from 'react';
import { loginRequest, registerRequest } from '../api/auth.js';

const STORAGE_KEY = 'kanban-user';

export const AuthContext = createContext(null);

function readStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function useAuthState() {
  const [user, setUser] = useState(readStoredUser);
  const [authLoading, setAuthLoading] = useState(false);

  function persist(nextUser) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    } catch {
      // без localStorage сессия просто не переживёт перезагрузку
    }
    setUser(nextUser);
  }

  async function login(login, password) {
    setAuthLoading(true);
    try {
      const authUser = await loginRequest({ login, password });
      if (!authUser) throw new Error('Сервер не вернул токен авторизации');
      persist(authUser);
      return authUser;
    } finally {
      setAuthLoading(false);
    }
  }

  async function register(name, login, password) {
    setAuthLoading(true);
    try {
      let authUser = await registerRequest({ name, login, password });
      if (!authUser) authUser = await loginRequest({ login, password });
      if (!authUser) throw new Error('Сервер не вернул токен авторизации');
      persist(authUser);
      return authUser;
    } finally {
      setAuthLoading(false);
    }
  }

  function logout() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ничего страшного
    }
    setUser(null);
  }

  return {
    user,
    token: user?.token || null,
    isAuth: Boolean(user?.token),
    authLoading,
    login,
    register,
    logout,
  };
}

export function useAuth() {
  return useContext(AuthContext);
}
