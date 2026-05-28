export const personal = {
  name: 'Sarvesh Kumar Singh',
  shortName: 'Legend Sarvesh',
  brandName: '',
  title: 'Full-Stack Developer',
  tagline: 'Building digital experiences that actually matter.',
  location: 'India',
  email: 'work.sarvesh77@gmail.com',
  linkedin: 'https://linkedin.com/in/sarvesh-kumar-singh-676777226/',
  github: 'https://github.com/Sarrveshh6',
  resumePath: '/resume/SarveshKumarSingh-FullStack-Developer-Resume.pdf',
  resumeDownloadName: 'SarveshKumarSingh-FullStack-Developer-Resume.pdf',
  availability: 'Open to Opportunities — Full-time & Freelance',
  meta: {
    title: 'Sarvesh Kumar Singh — Full-Stack Developer',
    description:
      'Full-stack web developer specializing in React, Node.js, and performant web applications. Builder of MOCKMASTER and modern digital products.',
    siteUrl: 'https://yourportfolio.dev',
  },
};

/** Section ids in page scroll order — used for navbar active state */
export const navSectionIds = [
  'hero',
  'skills',
  'experience',
  'about',
  'projects',
  'certifications',
  'contact',
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const heroCopy = {
  roles: 'Full-Stack Developer | React · Node.js · AI Integration',
  portfolioTitle: 'Portfolio',
  presentationLabel: 'Creative Presentation',
  greeting: "Hello! I'm",
  nameLine: 'Sarvesh Kumar Singh',
  bio: [
    'I build full-stack web applications where performance, clarity, and craft meet. From system design to pixel-level UI, I care about how products feel as much as how they work.',
    'I created various project during my graduation like MOCKMASTER — an AI-powered mock test platform — and ship projects end-to-end. and currently building other projects like  a AI-powered F1 race predictor . My work lives at the intersection of code, culture, and user experience.',
    'Currently open to full-time roles and freelance collaborations across India and remote.',
  ],
  portrait: {
    src: '/images/hero/portrait.png',
    alt: 'Sarvesh Kumar Singh — full-stack developer portrait',
    tag: personal.brandName,
    tagline: 'design / code',
  },
  sticker: 'BUILT BY SARVESH',
  primaryCta: { label: 'View My Work', href: '#projects' },
  secondaryCta: {
    label: 'Download Resume',
    href: personal.resumePath,
    download: personal.resumeDownloadName,
  },
};

export const aboutCopy = {
  label: 'About Me',
  subheadline: 'Developer by craft,\ndesigner by curiosity.',
  paragraphs: [
    "I'm a full-stack web developer who cares about both the code and the experience. I specialize in React, Node.js, and modern tooling to ship products that feel fast and intentional.",
    'Whether I am designing system architecture or refining hover transitions, I believe the details matter. I approach every project with product thinking — not just feature lists.',
    'Currently open to full-time roles and freelance collaborations. Exploring AI integrations,ML engineering, performance engineering, and thoughtful UI.',
  ],
  stats: [
    { value: 3, suffix: '+', label: 'Years Coding' },
    { value: 5, suffix: '+', label: 'Projects Shipped' },
    { value: 5, suffix: '', label: 'Certifications' },
    { value: 2, suffix: '', label: 'AI Product Launched' },
  ],
  cta: { label: "Let's build something together", href: '#contact' },
};

export const marqueeItems = [
  'Full-Stack Development',
  'React',
  'Node.js',
  'AI Integration',
  'MOCKMASTER',
  'Open to Opportunities',
  'Clean Code',
  'System Design',
  'API Development',
  'User Experience',
  'Performance Optimization',
  'ML Engineering',
  'AI Engineering',
  'API Development',
  'User Experience',
  'Performance Optimization',
  'F1',
  'Gym',
  'Music',
  'Sports',
];
