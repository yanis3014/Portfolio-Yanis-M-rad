"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  slug?: string;
}

export default function ProjectCard({ project }: { project: Project }): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardContent = (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 100% 12rem, 100% 12rem"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2 text-text dark:text-text-dark group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="flex-1 text-sm text-text/70 dark:text-text-dark/70 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="mb-4 space-x-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 text-xs bg-card-dark/10 dark:bg-card/10 border border-primary/20 rounded-md hover:bg-accent hover:text-secondary hover:border-accent transition-all duration-200"
            >
              <Github size={12} />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-1.5 text-xs bg-accent text-secondary border border-accent rounded-md hover:bg-accent/90 hover:shadow-md transition-all duration-200"
            >
              <ExternalLink size={12} />
              Demo
            </a>
          )}
        </div>
      </div>
    </>
  );

  return (
    <Link href={`/projects/${project.slug}`}>
      {isMounted ? (
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer border border-primary/20 rounded-xl overflow-hidden shadow-sm bg-card dark:bg-card-dark flex flex-col h-full hover:shadow-xl transition-all duration-300"
        >
          {cardContent}
        </motion.div>
      ) : (
        <div className="group cursor-pointer border border-primary/20 rounded-xl overflow-hidden shadow-sm bg-card dark:bg-card-dark flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]">
          {cardContent}
        </div>
      )}
    </Link>
  );
}