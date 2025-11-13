"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export default function TestimonialsSection() {
  const { t, locale } = useLocale();

  const testimonials = [
    {
      name: 'Alice D.',
      role: 'Chef de projet',
      content: locale === 'fr'
        ? 'Yanis a livré une landing page moderne et responsive dans les délais. Son code est propre et bien documenté.'
        : 'Yanis delivered a modern, responsive landing page on time. His code is clean and well documented.',
      rating: 5,
    },
    {
      name: 'Marc L.',
      role: 'Freelance UX',
      content: locale === 'fr'
        ? 'Collaboration très agréable. Yanis a su transformer ma maquette en une interface interactive et performante.'
        : 'Very pleasant collaboration. Yanis turned my mockup into an interactive and performant interface.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-background dark:bg-background-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-text-dark">{t('testimonials.title')}</h2>
          <p className="text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              viewport={{ once: true }}
              className="bg-card dark:bg-card-dark p-6 rounded-lg shadow-sm border border-primary/20"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote className="text-accent mb-3" size={20} />
              <p className="text-text dark:text-text-dark mb-4">“{t.content}”</p>
              <div>
                <p className="font-semibold text-text dark:text-text-dark">{t.name}</p>
                <p className="text-sm text-text/50 dark:text-text-dark/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
