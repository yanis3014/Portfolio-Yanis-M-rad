"use client";

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';
import { useLocale } from '@/contexts/LocaleContext';

export default function ProjectsPage() {
  const { t } = useLocale();

  return (
    <main className="mt-20 pb-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text dark:text-text-dark">{t('nav.projects')}</h1>
        <p className="text-lg text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
          {t('recentProjects.subtitle')}
        </p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * idx }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}