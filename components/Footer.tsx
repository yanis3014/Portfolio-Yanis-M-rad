"use client";

import { Github, Linkedin, Mail } from 'lucide-react';

/**
 * Site footer displaying social links and a copyright notice. Icons
 * are imported from lucide-react. Update the URLs below with your
 * actual GitHub, LinkedIn and email details.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 py-6 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/votre-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-primary transition-colors"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/votre-linkedin/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-primary transition-colors"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:votre.email@example.com"
          aria-label="Email"
          className="hover:text-primary transition-colors"
        >
          <Mail />
        </a>
      </div>
      <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
        &copy; {year} Yanis M'rad. Tous droits réservés.
      </p>
    </footer>
  );
}