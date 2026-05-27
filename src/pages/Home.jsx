import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import HireMeBanner from '../components/sections/HireMeBanner';
import Contact from '../components/sections/Contact';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Helmet>
        <title>{personal.meta.title}</title>
        <meta name="description" content={personal.meta.description} />
      </Helmet>
      <Hero />
      <Skills />
      <Experience />
      <About />
      <ProjectsShowcase />
      <Projects />
      <Certifications />
      <HireMeBanner />
      <Contact />
    </motion.div>
  );
}
