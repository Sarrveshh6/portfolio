import { personal } from './personal';

/** Editorial skills section — branding, headline, bottom skill tabs */
const nameParts = personal.name.split(' ');

export const skillsBranding = {
  firstName: nameParts[0],
  lastName: nameParts.slice(1).join(' ') || personal.shortName,
  tagline: personal.title.toLowerCase(),
};

export const skillsHeadline = {
  outline: 'Skills',
  solid: '& Stack',
  label: 'full-stack · AI · design',
};

export const skillTabs = [
  'Full-Stack Development',
  'React',
  'Node.js',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Express.js',
  'Machine Learning',
  'AI Engineering',
  'OpenAI',
  'UI / UX',
  'API Design',
  'Figma',
  'Framer Motion',
  'Docker',
  'Vercel',
  'Git',
  'Performance',
  'Product Thinking',
];

export const skillsFooter = {
  left: `Portfolio ${new Date().getFullYear()}`,
  right: `by ${personal.name}`,
};
