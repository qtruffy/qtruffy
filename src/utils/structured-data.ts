import {
  SEO_BASE_URL,
  SEO_DESCRIPTION,
  SEO_JOB_TITLE,
  SEO_LANGUAGE,
  SEO_NAME,
  SEO_PHOTO,
  SEO_SAME_AS,
  SEO_SHORT_NAME,
  SEO_SKILLS,
} from '@/utils/constants';
import type { Person, ProfilePage, WebSite, WithContext } from 'schema-dts';

const person: Person = {
  '@type': 'Person',
  name: SEO_NAME,
  alternateName: SEO_SHORT_NAME,
  url: SEO_BASE_URL,
  image: SEO_PHOTO,
  jobTitle: SEO_JOB_TITLE,
  description: SEO_DESCRIPTION,
  knowsAbout: SEO_SKILLS,
  sameAs: SEO_SAME_AS,
};

export const websiteJsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO_NAME,
  alternateName: [SEO_SHORT_NAME, `${SEO_NAME} ${SEO_JOB_TITLE}`],
  url: SEO_BASE_URL,
  inLanguage: SEO_LANGUAGE,
  description: SEO_DESCRIPTION,
  author: person,
  publisher: person,
};

export const profilePageJsonLd: WithContext<ProfilePage> = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: SEO_NAME,
  url: SEO_BASE_URL,
  inLanguage: SEO_LANGUAGE,
  description: SEO_DESCRIPTION,
  mainEntity: person,
};
