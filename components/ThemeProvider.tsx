"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/**
 * A simple theme context used to toggle between dark and light modes.
 *
 * The theme is stored in localStorage so that user preferences persist
 * across sessions. When the context loads, it checks for a saved value
 * and applies the appropriate class to the `document.documentElement`.
 */
type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'dark',
  toggleTheme: () => {},
});

/**
 * Hook to consume the current theme and toggle function.
 */
export function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

/**
 * Provides theme context to children components. It listens for changes
 * to the theme state and updates the HTML element class accordingly.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  // On mount, check for a saved theme and apply it
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      setTheme(stored);
      document.documentElement.classList.add(stored);
    } else {
      // default to dark mode
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Apply the theme to the document whenever it changes
  useEffect(() => {
    const opposite = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.remove(opposite);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}