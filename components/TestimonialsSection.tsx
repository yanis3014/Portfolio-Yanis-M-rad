"use client";

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export default function TestimonialsSection() {
  const { t, locale } = useLocale();

  const testimonials = [
    {
      name: 'Selim M.',
      role: 'Responsable des évènements – 50 ans de la Faculté de Pharmacie de Monastir (FPHM)',
      content: locale === 'fr'
        ? 'Travailler avec Yanis a été un vrai plaisir. Il a développé pour nous deux plateformes indispensables : le site d\'inscription du Pharmathon et celui du Forum de la Recherche. Le résultat a dépassé nos attentes : interfaces claires, système d\'inscriptions fiable, gestion des paiements, back-office complet… tout a été pensé avec sérieux et professionnalisme. Yanis s\'est montré réactif, autonome et force de proposition. Nous avons reçu d\'excellents retours des participants grâce à ses outils.'
        : 'Working with Yanis was a real pleasure. He developed two essential platforms for us: the Pharmathon registration site and the Research Forum site. The result exceeded our expectations: clear interfaces, reliable registration system, payment management, complete back-office... everything was designed with seriousness and professionalism. Yanis was responsive, autonomous and proactive. We received excellent feedback from participants thanks to his tools.',
      rating: 5,
    },
    {
      name: 'Karim',
      role: 'Fondateur de l\'application de paiement Dinary',
      content: locale === 'fr'
        ? 'Yanis a conçu l\'intégralité du backend de Dinary, une application mobile de paiement destinée au marché algérien. Il a réussi à construire une architecture robuste et sécurisée couvrant nos trois interfaces principales : commerçant, utilisateur et administrateur. Son travail a été irréprochable : documentation claire, API bien structurée, délais respectés et une réelle compréhension de nos besoins métier. C\'est un développeur sérieux, fiable et capable de prendre en charge des fonctionnalités complexes.'
        : 'Yanis designed the entire backend of Dinary, a mobile payment application for the Algerian market. He managed to build a robust and secure architecture covering our three main interfaces: merchant, user and administrator. His work was impeccable: clear documentation, well-structured API, deadlines met and a real understanding of our business needs. He is a serious, reliable developer capable of handling complex features.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-background dark:bg-background-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text dark:text-text-dark">{t('testimonials.title')}</h2>
          <p className="text-text/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
              viewport={{ once: true }}
              className="bg-card dark:bg-card-dark p-6 rounded-lg shadow-sm border border-primary/20"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote className="text-accent mb-3" size={20} />
              <p className="text-text dark:text-text-dark mb-4">“{t.content}”</p>
              <div>
                <p className="font-semibold text-text dark:text-text-dark">{t.name}</p>
                <p className="text-sm text-text/50 dark:text-text-dark/50">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
