import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import {
  skillsBranding,
  skillsHeadline,
  skillTabs,
  skillsFooter,
  SKILLS_PORTRAIT_SRC,
} from '../../data/skillsPage';
import { personal } from '../../data/personal';

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills-editorial relative flex min-h-screen flex-col overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="skills-editorial-grid absolute inset-0" aria-hidden />
      <div className="skills-editorial-leaves absolute inset-0" aria-hidden />

      {/* Top-left branding */}
      <header className="relative z-20 px-6 pt-8 md:px-10 md:pt-10 lg:px-14">
        <FadeIn>
          <p className="font-body text-sm text-white/80 md:text-base">{skillsBranding.firstName}</p>
          <p className="font-display text-3xl font-bold leading-none text-white md:text-4xl lg:text-5xl">
            {skillsBranding.lastName || skillsBranding.firstName}
          </p>
          <p className="mt-1 font-mono text-xs text-hero-red md:text-sm">{skillsBranding.tagline}</p>
        </FadeIn>
      </header>

      {/* Main hero area */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6 py-12 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-14 lg:py-16">
        {/* Left — editorial typography */}
        <FadeIn className="relative z-10 w-full max-w-xl lg:flex-1">
          <div className="skills-editorial-frame relative inline-block px-2 py-4">
            <h2 id="skills-heading" className="sr-only">
              Skills and technologies for {personal.name}
            </h2>
            <p className="skills-headline-outline font-display leading-[0.95] tracking-tight">
              {skillsHeadline.outline}
            </p>
            <p className="skills-headline-solid font-display leading-[0.95] tracking-tight">
              {skillsHeadline.solid}
            </p>
            <span className="skills-headline-label mt-4 inline-block font-mono text-xs uppercase tracking-widest text-white md:text-sm">
              {skillsHeadline.label}
            </span>
          </div>
        </FadeIn>

        {/* Right — portrait with jagged red frame */}
        <FadeIn delay={0.1} className="relative flex w-full max-w-md shrink-0 justify-center lg:max-w-lg lg:flex-1">
          <div className="skills-portrait-wrap">
            <div className="skills-portrait-jagged">
              <img
                src={SKILLS_PORTRAIT_SRC}
                alt={`${personal.name} — skills portrait`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom — skill tabs */}
      <div className="relative z-20 mt-auto">
        <div className="skills-tabs-scroll flex items-end gap-1 overflow-x-auto px-4 pb-0 pt-4 md:px-8 lg:px-14">
          {skillTabs.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02, duration: 0.35 }}
              className="skills-tab shrink-0"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <div className="skills-bottom-bar flex flex-col gap-2 border-t border-white/10 bg-black px-6 py-3 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-14 md:text-sm">
          <span>{skillsFooter.left}</span>
          <span>{skillsFooter.right}</span>
        </div>
      </div>

      <p className="sr-only">Skills: {skillTabs.join(', ')}</p>
    </section>
  );
}
