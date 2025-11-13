"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@/contexts/LocaleContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const toggleMenu = () => setOpen((prev) => !prev);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-primary/20 bg-card/80 dark:bg-card-dark/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link href="/" className="text-xl font-bold text-accent">
          Yanis M'rad
        </Link>
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-accent transition-colors text-text dark:text-text-dark"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
            className="p-2 rounded-md hover:bg-primary/10 transition-colors flex items-center gap-1 text-sm"
            title={t('footer.lang')}
          >
            <Globe size={16} />
            {locale === 'fr' ? 'EN' : 'FR'}
          </button>
          <ThemeToggle />
        </div>
        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
            className="p-2 rounded-md hover:bg-primary/10 transition-colors text-sm"
            title={t('footer.lang')}
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </button>
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2" aria-label="Menu mobile">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-4 bg-card dark:bg-card-dark"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-accent"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}