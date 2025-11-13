import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yanis M'Rad | Portfolio Développeur",
    short_name: "Yanis M'Rad",
    description: "Portfolio de Yanis M'Rad, développeur web spécialisé en Next.js, TypeScript et Tailwind.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
