"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export default function BlogSection() {
  const { t, locale } = useLocale();

  const posts = [
    {
      slug: 'nextjs-performance-tips',
      title: locale === 'fr'
        ? '5 astuces pour booster les performances d’une app Next.js'
        : '5 tips to boost Next.js app performance',
      excerpt: locale === 'fr'
        ? 'Découvrez des techniques simples pour réduire le temps de chargement et améliorer le Core Web Vitals.'
        : 'Discover simple techniques to reduce load time and improve Core Web Vitals.',
      date: '2024-11-01',
    },
    {
      slug: 'tailwind-advanced',
      title: locale === 'fr'
        ? 'Tailwind CSS avancé : layouts et animations'
        : 'Advanced Tailwind CSS: layouts and animations',
      excerpt: locale === 'fr'
        ? 'Comment aller au-delà des bases de Tailwind avec des layouts complexes et des animations fluides.'
        : 'How to go beyond Tailwind basics with complex layouts and smooth animations.',
      date: '2024-10-15',
    },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-text-dark">{t('blog.title')}</h2>
          <p className="text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              viewport={{ once: true }}
              className="bg-card dark:bg-card-dark p-6 rounded-lg shadow-sm border border-primary/20"
            >
              <div className="flex items-center gap-2 text-sm text-text/50 dark:text-text-dark/50 mb-3">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text dark:text-text-dark">{post.title}</h3>
              <p className="text-text/70 dark:text-text-dark/70 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-accent hover:underline text-sm"
              >
                {t('blog.readMore')} <ArrowRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-secondary transition-colors"
          >
            {t('blog.all')}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
