"use client";

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';
import { useLocale } from '@/contexts/LocaleContext';

export default function ProjectsPage() {
  const { t } = useLocale();
  const devProjects = projects.filter((project) => project.category === 'web');
  const algorithmProjects = projects.filter((project) => project.category === 'algorithms');
  const otherProjects = projects.filter((project) => {
    const category = project.category ?? '';
    return category && !['web', 'algorithms'].includes(category);
  });

  const highlightedAlgorithmProject = algorithmProjects[0];

  return (
    <main className="mt-20 pb-16 space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text dark:text-text-dark">{t('nav.projects')}</h1>
        <p className="text-lg text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
          {t('recentProjects.subtitle')}
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-accent/80">{t('projects.devSection.title')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text dark:text-text-dark">
              {t('projects.devSection.title')}
            </h2>
            <p className="text-text/70 dark:text-text-dark/70 max-w-3xl mx-auto md:mx-0">
              {t('projects.devSection.subtitle')}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {devProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-accent/80">{t('projects.algorithmsSection.title')}</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-text dark:text-text-dark">
              {t('projects.algorithmsSection.title')}
            </h2>
            <p className="text-text/70 dark:text-text-dark/70 max-w-3xl mx-auto md:mx-0">
              {t('projects.algorithmsSection.subtitle')}
            </p>
          </div>

          {highlightedAlgorithmProject ? (
            <motion.div
              key={highlightedAlgorithmProject.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto max-w-xl"
            >
              <ProjectCard project={highlightedAlgorithmProject} />
            </motion.div>
          ) : (
            <p className="text-text/70 dark:text-text-dark/70">
              {t('projects.algorithmsSection.subtitle')}
            </p>
          )}

          {otherProjects.length > 0 && (
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-text/50 dark:text-text-dark/50">
                Autres projets
              </p>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 * idx }}
                    viewport={{ once: true }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.section>
    </main>
  );
}