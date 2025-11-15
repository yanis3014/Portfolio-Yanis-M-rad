"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json';
import { useLocale } from '@/contexts/LocaleContext';

export default function ProjectsPage() {
  const { t } = useLocale();
  const majorProject = projects.find((project) => project.category === 'programming');
  const highlightPoints = [
    t('project.nonogram.generation'),
    t('project.nonogram.resolution'),
    t('project.nonogram.analysis'),
    t('project.nonogram.learnings')
  ];

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

      {majorProject && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-16"
        >
          <div className="max-w-6xl mx-auto space-y-6 px-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  {t('projects.major.title')}
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-text dark:text-text-dark">
                  {majorProject.title}
                </h2>
              </div>
              <Link
                href={`/projects/${majorProject.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {t('projects.major.cta')}
                <span aria-hidden>↗</span>
              </Link>
            </div>
            <p className="text-text/70 dark:text-text-dark/70 max-w-3xl">
              {t('projects.major.subtitle')}
            </p>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-primary/20 bg-card dark:bg-card-dark">
                <Image
                  src={majorProject.image}
                  alt={majorProject.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="space-y-4">
                <p className="text-text/80 dark:text-text-dark/80 text-base leading-relaxed">
                  {t('project.nonogram.description')}
                </p>
                <ul className="space-y-3 text-sm text-text/70 dark:text-text-dark/70 list-disc pl-5">
                  {highlightPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="space-y-3 text-sm text-text/70 dark:text-text-dark/70">
                  <p>{t('project.nonogram.details')}</p>
                  <p>{t('project.nonogram.conclusion')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

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