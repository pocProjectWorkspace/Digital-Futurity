import type { MetadataRoute } from 'next';

const base = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000';

const routes = [
  '',
  '/about',
  '/services',
  '/what-we-build',
  '/engagement',
  '/proof-points',
  '/contact',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
