import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes.js';

const STORAGE_KEY = 'kanban-theme';

const ThemeModeContext = createContext(null);

function readStoredMode() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    // localStorage может быть недоступен — используем системную тему
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState(readStoredMode);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // сохранение темы не критично
    }
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      isDark: mode === 'dark',
      toggleTheme: () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
    }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={themes[mode]}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
