"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Merci ! Je reviens vers vous au plus vite.');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Une idée, un projet, ou simplement envie d’échanger ? N’hésitez pas à m’envoyer un message.
        </p>
      </motion.section>

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Formulaire */}
        <motion.section
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <MessageSquare className="text-accent" /> Envoyez un message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nom
              </label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-accent" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-accent" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-primary/20 rounded-md bg-card dark:bg-card-dark focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-primary/20 rounded-md bg-card dark:bg-card-dark focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                placeholder="Votre message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-accent text-secondary px-4 py-2 rounded-md shadow hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Envoyer
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-600 dark:text-green-400 text-center"
              >
                {status}
              </motion.p>
            )}
          </form>
        </motion.section>

        {/* Coordonnées & Réseaux */}
        <motion.section
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Mail className="text-accent" /> Restons en contact
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:votre.email@example.com"
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <Mail size={18} className="text-accent" />
                <span>votre.email@example.com</span>
              </a>
              <a
                href="https://github.com/votre-github"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <Github size={18} className="text-accent" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/votre-linkedin/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <Linkedin size={18} className="text-accent" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={18} className="text-accent" />
                <span>France</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="p-4 bg-accent/5 rounded-lg border border-accent/20"
          >
            <p className="text-sm text-text dark:text-text-dark">
              <strong className="text-accent">Disponibilité :</strong> ouvert aux stages, missions freelance et collaborations.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}