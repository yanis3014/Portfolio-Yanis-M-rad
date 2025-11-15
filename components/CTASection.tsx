"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export default function CTASection() {
  const { t } = useLocale();

  return (
    <section className="py-16 px-4 bg-primary text-secondary">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg mb-8 text-secondary/80 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-md shadow hover:bg-secondary/90 transition-colors"
          >
            {t('cta.contact')} <ArrowRight size={18} />
          </Link>
          <Link
            href="/projects"
            className="inline-block border border-secondary px-6 py-3 rounded-md hover:bg-secondary hover:text-primary transition-colors"
          >
            {t('cta.projects')}
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            href="https://github.com/yanis3014"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yanis-m-rad-162047356/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
