import { SEO_BASE_URL } from '@/utils/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SEO_BASE_URL}/sitemap.xml`,
  };
}
