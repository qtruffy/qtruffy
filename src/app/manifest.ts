import {
  SEO_BASE_URL,
  SEO_DESCRIPTION,
  SEO_NAME,
  SEO_SHORT_NAME,
} from '@/utils/constants';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SEO_NAME,
    short_name: SEO_SHORT_NAME,
    description: SEO_DESCRIPTION,
    start_url: '/',
    scope: '/',
    id: SEO_BASE_URL,
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#111111',
    theme_color: '#111111',
    categories: ['business', 'education'],
    icons: [
      {
        src: '/android-chrome-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/android-chrome-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/android-chrome-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-chrome-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/maskable-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
