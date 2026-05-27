import { personal } from './personal';
import { aboutCopy } from './personal';

/** About showcase — cream grid layout (Golden Bites style) */
export const aboutPage = {
  pill: aboutCopy.label,
  eyebrow: `${personal.title} · Portfolio`,
  toolsLabel: 'Tools I work with :)',
  tools: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'OpenAI'],
  testimonial: {
    title: 'What I focus on',
    body: 'Building products where clean code, thoughtful UI, and real user impact come together — from MOCKMASTER to client builds shipped end-to-end.',
  },
};
