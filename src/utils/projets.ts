export type ProjetType = {
  startDate: string;
  title: string;
  description: string;
  company: string;
  companyUrl: string;
};

export const PROJETS: ProjetType[] = [
  {
    startDate: '2026',
    title: 'The Discord Framework',
    description:
      'An open-source framework that makes building Discord bots simple and approachable, even for beginners. You describe what your bot should do, and ChapterJS takes care of everything else, from connecting to Discord to putting it online.',
    company: 'ChapterJS',
    companyUrl: 'https://www.chapterjs.org/',
  },
  {
    startDate: '2026',
    title: 'Real-Time Satellite Tracking',
    description:
      'NearOrbital provides real-time satellite tracking with accurate orbital data and live position updates.',
    company: 'NearOrbital',
    companyUrl: 'https://www.nearorbital.com/',
  },
];
