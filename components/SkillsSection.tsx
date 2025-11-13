"use client";

import { Code2, Braces, Atom, Palette, GitBranch, Github, Rocket } from 'lucide-react';

const skills = [
  { name: 'Next.js', icon: Rocket },
  { name: 'React', icon: Atom },
  { name: 'TypeScript', icon: Braces },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
];

export default function SkillsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Code2 className="text-primary" /> Compétences
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 flex flex-col items-center gap-2 bg-white dark:bg-gray-900 hover:shadow-sm transition-shadow"
          >
            <Icon />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
