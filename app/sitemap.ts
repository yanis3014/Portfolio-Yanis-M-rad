import { MetadataRoute } from 'next'
import projectsData from '@/data/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yanismrad.fr'
  
  // Pages principales
  const routes = [
    '',
    '/about',
    '/contact',
    '/projects',
  ]

  // Générer les entrées du sitemap pour les pages principales
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Ajouter dynamiquement les projets individuels
  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  
  return [...staticRoutes, ...projectRoutes]
}
