/** MOCKMASTER project showcase — pale yellow grid layout */

import { getProjectBySlug } from './projects';

const mockmasterProject = getProjectBySlug('mockmaster');

export const mockmasterShowcase = {
  id: 'mockmaster',
  pill: 'AI Product',
  eyebrow: 'Proyecto 02 / EdTech · Exam Prep',
  title: 'MOCKMASTER',
  subtitle: 'AI-powered mock test platform',
  description:
    'MOCKMASTER uses GPT models to dynamically generate personalized mock tests by topic, difficulty, and exam type — with performance analytics and adaptive learning paths for students preparing for competitive exams.',
  toolsLabel: 'Tech stack :)',
  tools: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Tailwind CSS', 'JWT'],
  preview: '/images/projects/mockmaster.png',
  testimonial: {
    title: 'Project highlight',
    body: 'End-to-end product from concept to deployment — dynamic question generation, JWT-secured REST API, analytics dashboard, and MongoDB data modeling for tests and user progress.',
  },
  placeholder: {
    label: 'Prototype preview',
    hint: 'Add screenshot — public/images/projects/mockmaster.png',
  },
  links: {
    live: mockmasterProject?.liveUrl ?? '#',
    github: mockmasterProject?.githubUrl ?? '#',
    caseStudy: '/projects/mockmaster',
  },
};
