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
  title: "Yanis M'Rad | Portfolio Développeur",
  description: "Portfolio de Yanis M'Rad, développeur web spécialisé en Next.js, TypeScript et Tailwind. Découvrez mes projets et compétences.",
  keywords: ["Yanis M'Rad", "développeur web", "Next.js", "TypeScript", "Tailwind CSS", "portfolio", "React", "JavaScript"],
  authors: [{ name: "Yanis M'Rad" }],
  creator: "Yanis M'Rad",
  publisher: "Yanis M'Rad",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Yanis M'Rad | Portfolio Développeur",
    description: "Portfolio moderne en Next.js avec projets, animations et design élégant.",
    url: "https://yanismrad.fr",
    siteName: "Yanis M'Rad Portfolio",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "https://yanismrad.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yanis M'Rad - Portfolio Développeur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanis M'Rad | Portfolio Développeur",
    description: "Portfolio moderne en Next.js avec projets, animations et design élégant.",
    images: ["https://yanismrad.fr/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification=GMNSESECTK92DWplkB8fhlad11QIWD6wD6gRg7btlHQ",
  },
  alternates: {
    canonical: "https://yanismrad.fr",
  },
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