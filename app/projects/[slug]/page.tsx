"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { useState } from 'react';
import projects from '@/data/projects.json';
import SectionCarousel from '@/components/SectionCarousel';
import { useLocale } from '@/contexts/LocaleContext';

interface ImageSection {
  title: string;
  images: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  gallery?: string[];
  images?: string[];
  imagesSections?: Record<string, ImageSection>;
  github?: string;
  demo?: string;
  slug: string;
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

  const gallery = project.gallery?.length
    ? project.gallery
    : project.images?.length
    ? project.images
    : [project.image];
  const [idx, setIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0);

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

        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-card dark:bg-card-dark border border-primary/20 rounded-lg hover:bg-accent hover:text-secondary hover:border-accent transition-all duration-200 text-sm font-medium shadow-sm"
            >
              <Github size={18} />
              {t('project.source')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-secondary border border-accent rounded-lg hover:bg-accent/90 hover:shadow-lg transition-all duration-200 text-sm font-medium"
            >
              <ExternalLink size={18} />
              {t('project.demo')}
            </a>
          )}
        </div>
      </motion.header>

      {/* Galerie par sections pour Dinary ou galerie classique pour les autres */}
      {params.slug === 'dinary-payment-app' && project.imagesSections ? (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 space-y-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-text dark:text-text-dark">{t('project.gallery')}</h2>
          
          {Object.entries(project.imagesSections).map(([sectionKey, section], sectionIdx) => (
            <div key={sectionKey} className="space-y-6">
              {/* Description de la section */}
              <div className="space-y-3 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold text-accent">
                  {t(`project.dinary.sections.${sectionKey}.title`)}
                </h3>
                <p className="text-text/80 dark:text-text-dark/80 leading-relaxed">
                  {t(`project.dinary.sections.${sectionKey}.description`)}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-accent">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {section.images.length} capture{section.images.length > 1 ? 's' : ''}
                </div>
              </div>
              
              {/* Carrousel */}
              <div className="w-full">
                <SectionCarousel 
                  images={section.images} 
                  title={section.title}
                  sectionKey={sectionKey}
                  onImageClick={(imageIdx) => {
                    setCurrentSection(sectionKey);
                    setCurrentSectionIdx(imageIdx);
                    setIsModalOpen(true);
                  }}
                />
              </div>
              
              {/* Séparateur entre sections */}
              {sectionIdx < Object.entries(project.imagesSections || {}).length - 1 && (
                <div className="mt-12 mb-8">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </motion.section>
      ) : params.slug === 'nonogram-constraint-solver' ? (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-text dark:text-text-dark">{t('project.gallery')}</h2>
          <div className="space-y-10">
            <div className="space-y-8">
            {gallery.map((image, imageIdx) => {
              const isEven = imageIdx % 2 === 0;
              const nonogramTexts = [
                t('nonogram.description'),
                t('nonogram.resolution'),
                t('nonogram.details'),
                t('nonogram.learnings'),
                t('nonogram.conclusion')
              ];
              const altText = nonogramTexts[Math.min(imageIdx, nonogramTexts.length - 1)];
              return (
                <motion.div
                  key={`${image}-${imageIdx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 * imageIdx }}
                  viewport={{ once: true }}
                  className={`grid gap-4 items-center rounded-3xl border border-primary/10 bg-card/80 p-4 shadow-lg dark:bg-card-dark/80 md:grid-cols-[1fr_1fr] ${!isEven ? 'md:grid-flow-col-dense' : ''}`}
                >
                  <div
                    className={`relative w-full overflow-hidden rounded-2xl border border-primary/20 bg-card dark:bg-card-dark aspect-square shadow-xl cursor-pointer ${isEven ? '' : 'md:order-2'}`}
                    onClick={() => {
                      setIdx(imageIdx);
                      setIsModalOpen(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} — aperçu ${imageIdx + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className={`space-y-2 text-sm leading-relaxed text-text/80 dark:text-text-dark/80 ${!isEven ? 'md:order-1 md:text-right' : ''}`}>
                    <p>{altText}</p>
                    <p className="text-xs text-text/60 dark:text-text-dark/60 italic">
                      {t('nonogram.zoomHint')}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      ) : (
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
              className="relative w-full h-96 md:h-[32rem] rounded-xl overflow-hidden border border-primary/20 bg-card dark:bg-card-dark shadow-lg group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={gallery[idx]}
                alt={`${project.title} — capture ${idx + 1}`}
                fill
                sizes="(min-width: 1024px) 75vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/90 dark:bg-black/90 p-3 rounded-full shadow-lg">
                    <Expand size={24} className="text-text dark:text-text-dark" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 dark:bg-card-dark/80 shadow-lg hover:bg-card dark:hover:bg-card-dark hover:scale-110 transition-all duration-200 z-10"
                  aria-label={t('project.previous')}
                >
                  <ChevronLeft size={20} className="text-text dark:text-text-dark" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 dark:bg-card-dark/80 shadow-lg hover:bg-card dark:hover:bg-card-dark hover:scale-110 transition-all duration-200 z-10"
                  aria-label={t('project.next')}
                >
                  <ChevronRight size={20} className="text-text dark:text-text-dark" />
                </button>
                
                {/* Indicateurs */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIdx(i);
                      }}
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
      )}

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="prose prose-gray dark:prose-invert max-w-none"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-text dark:text-text-dark">{t('project.about')}</h2>
        <div className="bg-card dark:bg-card-dark p-6 rounded-lg border border-primary/20">
          {params.slug === 'pharmathon-monastir' ? (
            <>
              <p className="text-text dark:text-text-dark mb-4">{t('project.pharmathon.description')}</p>
              <p className="text-text dark:text-text-dark mb-4">{t('project.pharmathon.details')}</p>
              <p className="text-text dark:text-text-dark">{t('project.pharmathon.conclusion')}</p>
            </>
          ) : params.slug === 'forum-recherche-monastir' ? (
            <>
              <p className="text-text dark:text-text-dark mb-4">{t('project.forum.description')}</p>
              <p className="text-text dark:text-text-dark mb-4">{t('project.forum.details')}</p>
              <p className="text-text dark:text-text-dark">{t('project.forum.conclusion')}</p>
            </>
          ) : params.slug === 'dinary-payment-app' ? (
            <>
              <p className="text-text dark:text-text-dark mb-4">{t('project.dinary.description')}</p>
              <p className="text-text dark:text-text-dark mb-4">{t('project.dinary.details')}</p>
              <p className="text-text dark:text-text-dark">{t('project.dinary.conclusion')}</p>
            </>
          ) : (
            <>
              <p className="text-text dark:text-text-dark mb-4">{t('project.description')}</p>
              <p className="text-text dark:text-text-dark mb-4">{t('project.details')}</p>
              <p className="text-text dark:text-text-dark">{t('project.conclusion')}</p>
            </>
          )}
        </div>
      </motion.section>

      {/* Modal d'agrandissement */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                params.slug === 'dinary-payment-app' && currentSection && project.imagesSections
                  ? project.imagesSections[currentSection].images[currentSectionIdx]
                  : gallery[idx]
              }
              alt={`${project.title} — capture ${
                params.slug === 'dinary-payment-app' && currentSection
                  ? currentSectionIdx + 1
                  : idx + 1
              }`}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              priority
            />
            
            {/* Bouton fermer */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-black/60 hover:bg-black/80 hover:scale-110 transition-all duration-200 backdrop-blur-md border-2 border-white/50 shadow-2xl"
              aria-label="Fermer"
            >
              <X size={28} className="text-white drop-shadow-lg" />
            </button>

            {/* Navigation dans la modal */}
            {((params.slug === 'dinary-payment-app' && currentSection && project.imagesSections && project.imagesSections[currentSection].images.length > 1) || 
              (params.slug !== 'dinary-payment-app' && gallery.length > 1)) && (
              <>
                <button
                  onClick={() => {
                    if (params.slug === 'dinary-payment-app' && currentSection && project.imagesSections) {
                      const sectionImages = project.imagesSections[currentSection].images;
                      setCurrentSectionIdx((i) => (i - 1 + sectionImages.length) % sectionImages.length);
                    } else {
                      prev();
                    }
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 hover:bg-black/80 hover:scale-110 transition-all duration-200 backdrop-blur-md border-2 border-white/50 shadow-2xl"
                  aria-label={t('project.previous')}
                >
                  <ChevronLeft size={32} className="text-white drop-shadow-lg" />
                </button>
                <button
                  onClick={() => {
                    if (params.slug === 'dinary-payment-app' && currentSection && project.imagesSections) {
                      const sectionImages = project.imagesSections[currentSection].images;
                      setCurrentSectionIdx((i) => (i + 1) % sectionImages.length);
                    } else {
                      next();
                    }
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/60 hover:bg-black/80 hover:scale-110 transition-all duration-200 backdrop-blur-md border-2 border-white/50 shadow-2xl"
                  aria-label={t('project.next')}
                >
                  <ChevronRight size={32} className="text-white drop-shadow-lg" />
                </button>
                
                {/* Indicateurs dans la modal */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/30">
                  {(params.slug === 'dinary-payment-app' && currentSection && project.imagesSections
                    ? project.imagesSections[currentSection].images
                    : gallery
                  ).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (params.slug === 'dinary-payment-app' && currentSection) {
                          setCurrentSectionIdx(i);
                        } else {
                          setIdx(i);
                        }
                      }}
                      className={`w-3 h-3 rounded-full transition-all border border-white/30 ${
                        i === (params.slug === 'dinary-payment-app' && currentSection ? currentSectionIdx : idx)
                          ? 'bg-white w-8 shadow-lg' : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
