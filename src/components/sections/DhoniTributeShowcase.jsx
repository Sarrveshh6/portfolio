import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { dhoniTributeShowcase } from '../../data/dhoniTributeShowcase';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function DhoniTributeShowcase({ embedded = true }) {
  const project = dhoniTributeShowcase;

  const content = (
    <div className="mx-auto grid w-full max-w-[90rem] min-h-screen min-h-[100dvh] gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-20 xl:gap-16">
      {/* Left — preview image */}
      <FadeIn className="relative flex h-full min-h-[280px] items-center lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="dhoni-visual-wrap h-full w-full"
        >
          <div className="dhoni-visual-frame">
            <div
              className={`dhoni-visual-inner ${project.preview ? 'dhoni-visual-inner--filled' : ''}`}
            >
              {project.preview ? (
                <img
                  src={project.preview}
                  alt={`${project.title} page preview`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <>
                  <HiOutlinePhotograph className="h-10 w-10 opacity-30" />
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest opacity-60">
                    {project.placeholder.label}
                  </p>
                  <p className="mt-2 max-w-[240px] text-center text-[11px] opacity-50">
                    {project.placeholder.hint}
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </FadeIn>

      {/* Right — content */}
      <div className="flex flex-col justify-center">
        <div className="dhoni-content-panel space-y-4 md:space-y-5">
          <FadeIn>
            <span className="dhoni-pill">{project.pill}</span>
          </FadeIn>

          <FadeIn delay={0.04}>
            <p className="dhoni-eyebrow font-mono text-[11px] uppercase tracking-[0.18em]">
              {project.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h3
              id="dhoni-tribute-heading"
              className="dhoni-title font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {project.title}
            </h3>
            <p className="dhoni-subtitle mt-2 font-display text-xl font-semibold md:text-2xl">
              {project.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="dhoni-body text-sm leading-relaxed md:text-base">
              {project.description}
            </p>
            <p className="dhoni-highlight mt-3 font-mono text-xs font-semibold uppercase tracking-wide">
              {project.highlight}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="dhoni-tools-label text-sm font-semibold">{project.toolsLabel}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="dhoni-tool-chip">
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="flex flex-wrap gap-3 pt-1">
            <a
              href={project.links.live}
              className="dhoni-link-btn dhoni-link-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View tribute →
            </a>
            <a
              href={project.links.github}
              className="dhoni-link-btn dhoni-link-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return (
      <section
        className="dhoni-showcase relative w-full overflow-hidden"
        aria-labelledby="dhoni-tribute-heading"
      >
        <div className="dhoni-showcase-grid absolute inset-0" aria-hidden />
        <div className="relative z-10 w-full">{content}</div>
      </section>
    );
  }

  return (
    <section
      id="dhoni-tribute"
      className="dhoni-showcase relative w-full min-h-screen overflow-hidden"
      aria-labelledby="dhoni-tribute-heading"
    >
      <div className="dhoni-showcase-grid absolute inset-0" aria-hidden />
      <div className="relative z-10 w-full">{content}</div>
    </section>
  );
}
