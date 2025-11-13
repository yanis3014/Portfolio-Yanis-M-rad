"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import projects from '@/data/projects.json';
import { useLocale } from '@/contexts/LocaleContext';

export default function RecentProjects() {
  const recent = projects.slice(0, 2);
  const { t } = useLocale();

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-text-dark">{t('recentProjects.title')}</h2>
          <p className="text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            {t('recentProjects.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {recent.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="inline-block bg-secondary text-accent px-6 py-3 rounded-md shadow hover:bg-secondary/90 transition-colors"
          >
            {t('recentProjects.all')}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
