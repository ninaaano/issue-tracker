import { useContext, useCallback } from 'react';
import { ThemeContext } from '../context/themeProvider';

const useTheme = () => {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (themeMode === 'light') {
      setThemeMode('dark');
      window.localStorage.setItem('theme', 'dark');
      return;
    }
    setThemeMode('light');
    window.localStorage.setItem('theme', 'light');
  }, [themeMode]);

  return [themeMode, toggleTheme];
};

export default useTheme;
