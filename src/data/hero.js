import { personal } from './personal';
import { experience } from './experience';
import { certifications } from './certifications';

/** Set to your file path when ready, e.g. '/images/hero/portrait.png' */
export const HERO_PORTRAIT_SRC = '/images/hero/portrait.png';

export const heroZine = {
  sticker: `Hey! I'm ${personal.shortName}`,
  portrait: {
    src: HERO_PORTRAIT_SRC,
    alt: `${personal.name} — full-stack developer`,
    brandTag: personal.brandName,
    brandTagline: 'design / code',
    uploadHint: 'Add your cutout portrait to public/images/hero/portrait.png',
  },
  heading: {
    prefix: 'Hola! Soy',
    name: personal.name,
  },
  bioRich: [
    { text: "I'm " },
    { text: personal.name.split(' ')[0], bold: true },
    {
      text: ', a full-stack developer who builds web products where performance, clarity, and craft meet. I care about ',
    },
    { text: 'culture', bold: true },
    { text: ', ' },
    { text: 'emotion', bold: true },
    { text: ', and ' },
    { text: 'aesthetics', bold: true },
    { text: ' — the same way I care about clean architecture and fast load times.' },
    { text: ' I shipped ' },
    { text: 'MOCKMASTER', bold: true },
    {
      text: ', an AI-powered mock test platform, and I approach every project with full ownership from idea to deployment.',
    },
  ],
  experienceTitle: 'Experience',
  experience: experience.map((item, i) => ({
    period: item.dateRange,
    periodColor: i % 2 === 0 ? 'red' : 'green',
    role: item.role,
    company: item.company,
  })),
  studiesTitle: 'Studies',
  studies: certifications.slice(0, 4).map((c) => ({
    name: c.name,
    issuer: c.issuer,
    year: c.date,
  })),
  focusTitle: 'Focus',
  focus: [
    'Full-Stack Development',
    'UI / UX',
    'AI Integration',
    'Machine Learning',
    'AI Engineering',
    'API Design',
    'Performance',
    'Product Thinking',
    'Gym',
    'Music',
    'Sports',
  ],
  toolsTitle: 'Tools',
  tools: [
    { id: 'react', label: 'React' },
    { id: 'node', label: 'Node.js' },
    { id: 'mongo', label: 'MongoDB' },
    { id: 'tailwind', label: 'Tailwind' },
    { id: 'openai', label: 'OpenAI' },
    { id: 'figma', label: 'Figma' },
  ],
  /** Polaroid slots — set `src` when you add images under public/images/hero/polaroids/ */
  polaroids: [
    { id: 'p1', src: '/images/hero/polaroids/gym.png', caption: 'Gym', rotate: -5, fit: 'cover' },
    { id: 'p2', src: '/images/hero/polaroids/bhu.png', caption: 'BHU', rotate: 3, fit: 'cover' },
    { id: 'p3', src: '/images/hero/polaroids/photoshoot.png', caption: 'Photoshoot', rotate: -2, fit: 'cover' },
  ],
  ctas: {
    primary: { label: 'View My Work', href: '#projects' },
    secondary: {
      label: 'Download Resume',
      href: personal.resumePath,
      download: personal.resumeDownloadName,
    },
  },
};
