'use client';

import { createContext, useContext, useState } from 'react';
console.log(localStorage.getItem('theme'));
const ThemeContext = createContext(localStorage.getItem('theme') ?? 'light');

export const ThemeProvider = ({ children }) => {
  console.log(localStorage.getItem('theme'));
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
