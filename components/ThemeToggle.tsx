"use client";

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

/**
 * A button that toggles between light and dark themes. The current
 * theme is read from ThemeProvider and clicking the button flips
 * between the two modes. Icons from lucide-react are used to
 * visually indicate the active theme.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Basculer le thème"
      className="p-2 rounded-full transition-colors hover:bg-secondary/20 dark:hover:bg-primary/20"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}