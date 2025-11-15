"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/contexts/LocaleContext';

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative h-[80vh] mt-14 overflow-hidden flex items-end justify-center">
      {/* Background hero image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/profileImage.jpg"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: 'center center' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/20 to-primary/40 dark:from-primary/20 dark:via-primary/30 dark:to-primary/50" />
      </div>

      {/* Mobile title pinned near the top */}
      <div className="absolute inset-x-0 top-4 md:hidden z-10 px-4 flex justify-end">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-right text-secondary drop-shadow-lg max-w-xs"
        >
          {t('hero.greeting')}
          <span className="text-blue-900 block">Yanis M'rad</span>
        </motion.h1>
      </div>

      {/* Text content over background */}
      <div className="relative z-10 text-right max-w-2xl ml-auto mr-4 px-4 mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block text-4xl md:text-5xl font-bold mb-4 text-secondary drop-shadow-lg"
        >
          {t('hero.greeting')} <span className="text-blue-900">Yanis M'rad</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-secondary/90 dark:text-secondary/80 mb-6 drop-shadow-md"
        >
          {t('hero.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/projects"
              className="inline-block bg-secondary text-accent px-6 py-3 rounded-md shadow hover:bg-secondary/90 transition-colors"
            >
              {t('hero.cta.projects')}
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-secondary/40 px-6 py-3 rounded-md hover:border-accent hover:text-accent transition-colors text-secondary"
            >
              {t('hero.cta.contact')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}