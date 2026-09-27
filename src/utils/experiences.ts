export type ExperienceType = {
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  company: string;
  companyUrl: string;
};

export const EXPERIENCES: ExperienceType[] = [
  {
    startDate: '2026',
    endDate: 'Present',
    title: 'Software Engineer',
    description:
      'Design and development of secure web solutions for professional banking services and Single Sign-On (SSO) authentication systems, with a strong focus on performance, quality, and user experience.',
    company: 'Societe Generale',
    companyUrl: 'https://www.linkedin.com/company/societe-generale/',
  },
  {
    startDate: '2024',
    endDate: '2026',
    title: 'Software Engineer',
    description:
      'Contributed to the development and evolution of SaaS applications, ensuring robust architecture, high performance, maintainability, and a seamless user experience throughout the product lifecycle.',
    company: '7Opteam (acquired by Nomadia)',
    companyUrl: 'https://www.linkedin.com/company/7opteam/',
  },
  {
    startDate: '2020',
    endDate: '2024',
    title: 'Software Engineer & Trainer',
    description:
      'Developed and delivered training programs for software engineers, ensuring they have the skills and knowledge to build and maintain software solutions.',
    company: 'Logicmax (acquired by Sofia)',
    companyUrl: 'https://www.linkedin.com/company/logicmax-technologie/',
  },
];
