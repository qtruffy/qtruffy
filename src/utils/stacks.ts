export type StackType = {
  title: string;
  values: string[];
};

export const STACKS: StackType[] = [
  {
    title: 'Frontend',
    values: [
      'React',
      'Next.js',
      'Angular',
      'Tailwind CSS',
      'TypeScript ES6+',
      'Storybook',
    ],
  },
  {
    title: 'Backend',
    values: ['tRPC', 'React Query', 'Supabase', 'Redis', 'Python'],
  },
  {
    title: 'AI & Code',
    values: ['VSCode', 'Cursor', 'Claude', 'Codex', 'Vercel', 'Docker'],
  },
  {
    title: 'Tools',
    values: ['Figma', 'Jira', 'Github', 'Slack', 'Notion'],
  },
];
