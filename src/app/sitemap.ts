import { SEO_BASE_URL } from '@/utils/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SEO_BASE_URL,
      lastModified,
      changeFrequency: 'monthly' as const,
    },
  ];
}
