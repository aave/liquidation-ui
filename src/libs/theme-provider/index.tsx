import React, { ReactNode, useContext, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { themes } from './themes';

export const gradient = (
  angle: number,
  from: string,
  percentFrom: number,
  to: string,
  percentTo: number
) => `linear-gradient(${angle}deg, rgba(${from}) ${percentFrom}%, rgba(${to}) ${percentTo}%)`;

export const rgba = (color: string) => `rgba(${color})`;

interface ThemeContext {
  currentTheme: {
    [key: string]: {
      hex: string;
      rgb: number[];
    };
  };
  changeTheme: (name: string) => void;
  isDarkMode: boolean;
  md: boolean;
  sm: boolean;
  xs: boolean;
}

const ThemeContext = React.createContext({} as ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentThemeName, setCurrentThemeName] = useState(
    localStorage.getItem('theme') || 'defaultTheme'
  );

  const changeTheme = (name: string) => {
    localStorage.setItem('theme', name);
    setCurrentThemeName(name);
  };

  const isDarkMode = currentThemeName === 'darkTheme';

  const width = useWindowWidth();
  const md = width < 1024;
  const sm = width < 768;
  const xs = width < 480;
  const currentTheme = themes[currentThemeName];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        changeTheme,
        isDarkMode,
        md,
        sm,
        xs,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
