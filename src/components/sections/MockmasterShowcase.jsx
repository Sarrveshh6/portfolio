import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { mockmasterShowcase } from '../../data/mockmasterShowcase';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function MockmasterShowcase({ embedded = true }) {
  const project = mockmasterShowcase;

  const content = (
    <div className="mx-auto grid w-full max-w-[90rem] min-h-screen min-h-[100dvh] gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-20 xl:gap-16">
      {/* Left — image placeholder */}
      <FadeIn className="relative order-2 flex h-full min-h-[280px] items-center lg:order-1 lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mockmaster-visual-wrap h-full w-full"
        >
          <div className="mockmaster-visual-frame">
            <div className="mockmaster-visual-inner">
              <HiOutlinePhotograph className="h-10 w-10 opacity-30" />
              <p className="mt-3 font-mono text-xs uppercase tracking-widest opacity-60">
                {project.placeholder.label}
              </p>
              <p className="mt-2 max-w-[240px] text-center text-[11px] opacity-50">
                {project.placeholder.hint}
              </p>
            </div>
          </div>
        </motion.div>
      </FadeIn>

      {/* Right — content */}
      <div className="order-1 flex flex-col justify-center space-y-4 md:space-y-5 lg:order-2">
        <FadeIn>
          <span className="mockmaster-pill">{project.pill}</span>
        </FadeIn>

        <FadeIn delay={0.04}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1a1a1a]/50">
            {project.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h3
            id="mockmaster-heading"
            className="mockmaster-title font-display font-bold tracking-tight"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-lg font-semibold text-[#1a1a1a] md:text-xl">{project.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="max-w-lg text-sm leading-snug text-[#1a1a1a]/80 md:text-[15px] md:leading-relaxed">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-semibold text-[#1a1a1a]">{project.toolsLabel}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="mockmaster-tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mockmaster-testimonial max-w-lg">
          <p className="font-display text-sm font-semibold text-[#1a1a1a]">
            {project.testimonial.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/75">
            {project.testimonial.body}
          </p>
        </FadeIn>

        <FadeIn delay={0.14} className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.links.live}
            className="mockmaster-link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo →
          </a>
          <a
            href={project.links.github}
            className="mockmaster-link-btn mockmaster-link-btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
          <Link to={project.links.caseStudy} className="mockmaster-link-btn mockmaster-link-btn--ghost">
            Case study →
          </Link>
        </FadeIn>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <section
        className="mockmaster-showcase relative w-full overflow-hidden"
        aria-labelledby="mockmaster-heading"
      >
        <div className="mockmaster-showcase-grid absolute inset-0" aria-hidden />
        <div className="relative z-10 w-full">{content}</div>
      </section>
    );
  }

  return (
    <section
      id="mockmaster"
      className="mockmaster-showcase relative w-full min-h-screen overflow-hidden"
      aria-labelledby="mockmaster-heading"
    >
      <div className="mockmaster-showcase-grid absolute inset-0" aria-hidden />
      <div className="relative z-10 w-full">{content}</div>
    </section>
  );
}
