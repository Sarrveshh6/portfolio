export const projects = [
  {
    id: 'algovision',
    slug: 'algovision',
    number: '01',
    title: 'ALGOVISION',
    tagline: 'DSA Visualizer Webapp — interactive algorithm learning',
    description:
      'Visualizes complex data structures and algorithms for students using Chart.js and D3.js with step-by-step, interactive flows.',
    category: 'Web App',
    year: '2025',
    featured: false,
    showcaseOnly: true,
    thumbnail: '/images/projects/algovision.png',
    tech: ['React', 'D3.js', 'Chart.js', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarrveshh6/ALGOVISION_REPO/tree/main/algovision',
    hasCaseStudy: false,
  },
  {
    id: 'mockmaster',
    slug: 'mockmaster',
    number: '02',
    title: 'MOCKMASTER',
    tagline: 'AI-powered mock test generator for exam preparation',
    description:
      'MOCKMASTER uses GPT models to dynamically generate personalized mock tests by topic, difficulty, and exam type — with performance analytics and adaptive learning paths.',
    category: 'AI Product',
    year: '2024',
    featured: false,
    showcaseOnly: true,
    thumbnail: '/images/projects/mockmaster.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Tailwind CSS', 'JWT'],
    liveUrl: 'https://mockmasterr.onrender.com',
    githubUrl: 'https://github.com/Sarrveshh6/MOCKMASTER',
    hasCaseStudy: true,
    caseStudy: {
      problem:
        'Students preparing for competitive exams struggle to find quality, personalized practice material at scale.',
      solution:
        'Built a full-stack platform that generates tailored mock tests via OpenAI, tracks performance, and adapts difficulty over time.',
      outcome:
        'End-to-end product from concept to deployment — demonstrating initiative, AI integration, and full product ownership.',
      highlights: [
        'Dynamic question generation with GPT-4',
        'JWT-secured REST API',
        'Responsive React UI with analytics dashboard',
        'MongoDB data modeling for tests and user progress',
      ],
    },
  },
  {
    id: 'nirbhaya',
    slug: 'nirbhaya',
    number: '03',
    title: 'NIRBHAYA',
    tagline: 'Women’s safety web app — emergency SOS alerts',
    description:
      'Sends emergency messages to trusted contacts during panic situations using Twilio and Python Flask, with location sharing and rapid alert flows.',
    category: 'Safety · Web App',
    year: '2025',
    featured: false,
    showcaseOnly: true,
    thumbnail: '/images/projects/raksha.png',
    tech: ['Python', 'Flask', 'Twilio API', 'JavaScript', 'REST APIs'],
    liveUrl: '#',
    githubUrl: '#',
    hasCaseStudy: false,
  },
  {
    id: 'dhoni-tribute',
    slug: 'dhoni-tribute',
    number: '04',
    title: 'MS Dhoni Tribute',
    tagline: 'Tribute page to Mahendra Singh Dhoni — captain & wicket-keeper',
    description:
      'Internship project: a tribute website built with HTML, CSS, and JavaScript honoring MS Dhoni’s career and legacy in Indian cricket.',
    category: 'Tribute · Front-end',
    year: '2024',
    featured: false,
    showcaseOnly: true,
    thumbnail: '/images/projects/dhoni-tribute.png',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarrveshh6/codsoft/tree/main/Tribute1',
    hasCaseStudy: false,
  },
  {
    id: 'gau-gyaan',
    slug: 'gau-gyaan',
    number: '05',
    title: 'Gau_Gyaan',
    tagline: 'SIH hackathon — veterinary AI for breed & disease identification',
    description:
      'Team project for Smart India Hackathon: CNN-based cattle breed identification, disease detection, and cure guidance. Built with React, TypeScript, and Vite.',
    category: 'SIH · ML / Web',
    year: '2025',
    featured: false,
    showcaseOnly: true,
    thumbnail: '🐄',
    tech: ['React', 'TypeScript', 'Vite', 'CNN', 'Machine Learning'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Sarrveshh6/Gau_Gyaan',
    hasCaseStudy: false,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
