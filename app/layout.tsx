import '@/styles/globals.css';
import type { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Inter } from 'next/font/google';

// Load the Inter font subset for better performance
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: "Yanis M'rad — Portfolio",
    template: "%s | Yanis M'rad",
  },
  description: "Portfolio de Yanis M'rad – Étudiant à Polytech Nice Sophia Antipolis, passionné de développement web (Next.js, TypeScript, Tailwind CSS).",
};

/**
 * The root layout wraps every page. It sets up the HTML skeleton,
 * applies the selected font, and includes persistent elements such as
 * the navigation bar and footer. The ThemeProvider manages dark/light
 * mode across the application.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col bg-background dark:bg-background-dark text-text dark:text-text-dark`}> 
        <LocaleProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}