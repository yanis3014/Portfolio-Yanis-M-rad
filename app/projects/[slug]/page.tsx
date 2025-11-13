"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import projects from '@/data/projects.json';
import { useLocale } from '@/contexts/LocaleContext';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];
  github?: string;
  demo?: string;
  slug?: string;
}

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { t } = useLocale();
  const project = projects.find(
    (p) => (p as Project & { slug?: string }).slug === params.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.slug
  ) as Project | undefined;

  if (!project) notFound();

  const gallery = project.images?.length ? project.images : [project.image];
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setIdx((i) => (i + 1) % gallery.length);

  return (
    <main className="mt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors text-text dark:text-text-dark">
          <ArrowLeft size={16} />
          {t('project.back')}
        </Link>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text dark:text-text-dark">{project.title}</h1>
        <p className="text-lg text-text/70 dark:text-text-dark/70 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors text-text dark:text-text-dark"
            >
              <Github size={16} />
              {t('project.source')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors text-text dark:text-text-dark"
            >
              <ExternalLink size={16} />
              {t('project.demo')}
            </a>
          )}
        </div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text dark:text-text-dark">{t('project.gallery')}</h2>
        <div className="relative w-full max-w-5xl mx-auto">
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-96 md:h-[32rem] rounded-xl overflow-hidden border border-primary/20 bg-card dark:bg-card-dark shadow-lg"
          >
            <Image
              src={gallery[idx]}
              alt={`${project.title} — capture ${idx + 1}`}
              fill
              sizes="(min-width: 1024px) 75vw, 90vw"
              className="object-cover"
              priority
            />
          </motion.div>
          {gallery.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 dark:bg-card-dark/80 shadow-lg hover:bg-card dark:hover:bg-card-dark transition-colors"
                aria-label={t('project.previous')}
              >
                <ChevronLeft size={20} className="text-text dark:text-text-dark" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 dark:bg-card-dark/80 shadow-lg hover:bg-card dark:hover:bg-card-dark transition-colors"
                aria-label={t('project.next')}
              >
                <ChevronRight size={20} className="text-text dark:text-text-dark" />
              </motion.button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === idx ? 'bg-accent w-6' : 'bg-muted'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="prose prose-gray dark:prose-invert max-w-none"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text dark:text-text-dark">{t('project.about')}</h2>
        <div className="bg-card dark:bg-card-dark p-6 rounded-lg border border-primary/20">
          <p className="text-text dark:text-text-dark mb-4">{t('project.description')}</p>
          <p className="text-text dark:text-text-dark mb-4">{t('project.details')}</p>
          <p className="text-text dark:text-text-dark">{t('project.conclusion')}</p>
        </div>
      </motion.section>
    </main>
  );
}
