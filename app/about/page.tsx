"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Code, Target, Mail, Github, Linkedin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from '@/contexts/LocaleContext';

export default function AboutPage() {
  const { t } = useLocale();

  const skills = [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 75 },
    { name: 'Node.js', level: 70 },
  ];

  const timeline = [
    {
      year: '2024',
      title: t('about.timeline.2024.title'),
      school: 'Polytech Nice Sophia Antipolis',
      description: t('about.timeline.2024.description'),
    },
    {
      year: '2023',
      title: t('about.timeline.2023.title'),
      school: 'Polytech Nice Sophia Antipolis',
      description: t('about.timeline.2023.description'),
    },
    {
      year: '2022',
      title: t('about.timeline.2022.title'),
      school: t('about.timeline.2022.school'),
      description: t('about.timeline.2022.description'),
    },
  ];

  return (
    <main className="mt-20 pb-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text dark:text-text-dark">{t('about.title')}</h1>
        <p className="text-lg text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
          {t('about.intro').replace('{name}', "Yanis M'rad")}
        </p>
      </motion.section>

      {/* Présentation */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="prose prose-gray dark:prose-invert max-w-none text-center">
          <p className="text-text dark:text-text-dark leading-relaxed">
            Actuellement en 2ᵉ année de prépa intégrée à <strong className="text-accent">Polytech Nice Sophia Antipolis</strong>, je me spécialise dans la création d’applications web
            performantes et élégantes avec <strong className="text-accent">Next.js</strong>, <strong className="text-accent">TypeScript</strong> et <strong className="text-accent">Tailwind CSS</strong>.
          </p>
          <p className="text-text dark:text-text-dark leading-relaxed mt-4">
            J’aime concevoir des interfaces soignées, optimiser les performances et explorer les bonnes pratiques d’accessibilité.
            Toujours curieux d’apprendre, je cherche à progresser en architecture front-end et à contribuer à des projets open source.
          </p>
        </div>
      </motion.section>

      {/* Timeline parcours */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <GraduationCap className="text-accent" /> {t('about.journey')}
        </h2>
        <div className="relative border-l-2 border-accent/20 pl-8 ml-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <div className="absolute -left-10 w-4 h-4 bg-accent rounded-full border-4 border-white dark:border-black" />
              <div className="bg-card dark:bg-card-dark p-4 rounded-lg shadow-sm border border-primary/20">
                <div className="flex items-center gap-2 text-sm text-accent font-medium mb-1">
                  <Calendar size={14} />
                  {item.year}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.school}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Compétences animées */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <Code className="text-accent" /> {t('about.skills')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-text/50 dark:text-text-dark/50">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + 0.1 * idx }}
                  viewport={{ once: true }}
                  className="bg-accent h-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Objectifs */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <Target className="text-accent" /> {t('about.objectives')}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            t('about.goal1'),
            t('about.goal2'),
            t('about.goal3'),
            t('about.goal4'),
          ].map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-4 bg-card dark:bg-card-dark rounded-lg border border-primary/20"
            >
              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
              <p className="text-sm text-text dark:text-text-dark">{goal}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">{t('about.contact')}</h2>
        <p className="text-text/70 dark:text-text-dark/70 mb-6">
          {t('about.contactSubtitle')}
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link href="/contact" className="inline-block bg-accent text-secondary px-6 py-3 rounded-md shadow hover:bg-accent/90 transition-colors">
            {t('about.contactBtn')}
          </Link>
          <a
            href="https://github.com/votre-github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors text-text dark:text-text-dark"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/votre-linkedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors text-text dark:text-text-dark"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href="mailto:votre.email@example.com" className="flex items-center gap-2 text-sm hover:text-accent transition-colors text-text dark:text-text-dark">
            <Mail size={18} />
            Email
          </a>
        </div>
      </motion.section>
    </main>
  );
}