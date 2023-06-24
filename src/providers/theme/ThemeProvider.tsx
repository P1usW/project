import React from 'react';
import ThemeContext from "./ThemeContext";
import { getTheme } from '@src/utils/getTheme';

interface ThemeProvider {
  children: React.ReactNode
}

/**
 * Функциональный компонент, в который оборачиваем всё приложение.
 * Он будет отслеживать изменение темы и будет изменять значение
 * темы в html теге.
 */
const ThemeProvider = ({ children }: ThemeProvider) => {
  const [ theme, setTheme ] = React.useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [ theme ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider