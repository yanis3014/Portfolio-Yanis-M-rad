"use client";

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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group cursor-pointer border border-primary/20 rounded-xl overflow-hidden shadow-sm bg-card dark:bg-card-dark flex flex-col h-full hover:shadow-xl transition-all duration-300"
      >
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
          <div className="flex items-center gap-3 text-xs text-text/50 dark:text-text-dark/50">
            {project.github && (
              <span className="flex items-center gap-1">
                <Github size={14} />
                Code
              </span>
            )}
            {project.demo && (
              <span className="flex items-center gap-1">
                <ExternalLink size={14} />
                Demo
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}