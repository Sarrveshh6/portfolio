import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { algovisionShowcase } from '../../data/algovisionShowcase';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function AlgovisionShowcase({ embedded = false }) {
  const project = algovisionShowcase;

  const content = (
    <div className="mx-auto grid w-full max-w-[90rem] min-h-screen min-h-[100dvh] gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-20 xl:gap-16">
      {/* Left — compact content */}
      <div className="project-showcase-content flex flex-col justify-center space-y-4 md:space-y-5">
        <FadeIn>
          <span className="project-pill">{project.pill}</span>
        </FadeIn>

        <FadeIn delay={0.04}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
            {project.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h3
            id={embedded ? 'algovision-heading' : undefined}
            className="project-title font-display font-bold tracking-tight"
          >
            {project.title}
          </h3>
          <p className="mt-1 text-lg font-semibold text-white md:text-xl">{project.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="max-w-md text-sm leading-snug text-white/75 md:text-[15px] md:leading-relaxed">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-semibold text-white/90">{project.toolsLabel}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="project-tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.links.live}
            className="project-link-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live demo →
          </a>
          <a
            href={project.links.github}
            className="project-link-btn project-link-btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </FadeIn>
      </div>

      {/* Right — prototype image placeholder */}
      <FadeIn delay={0.1} className="relative flex h-full min-h-[280px] items-center lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="project-mockup-placeholder flex h-full w-full items-center justify-center"
        >
          <div className="project-mockup-laptop h-full max-h-[min(70vh,520px)] w-full max-w-[520px]" aria-hidden>
            <div className="project-mockup-screen h-full min-h-[280px]">
              <HiOutlinePhotograph className="h-10 w-10 text-white/25" />
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-white/40">
                {project.placeholder.label}
              </p>
              <p className="mt-2 max-w-[220px] text-center text-[11px] text-white/30">
                {project.placeholder.hint}
              </p>
            </div>
          </div>
          <div className="project-mockup-sticker" aria-hidden />
        </motion.div>
      </FadeIn>
    </div>
  );

  if (embedded) {
    return (
      <section
        aria-labelledby="algovision-heading"
        className="project-showcase relative w-full overflow-hidden border-t border-white/10"
      >
        <div className="project-showcase-grid absolute inset-0" aria-hidden />
        <div className="project-showcase-glow absolute inset-0" aria-hidden />
        <div className="relative z-10 w-full">{content}</div>
      </section>
    );
  }

  return (
    <section
      id="algovision"
      className="project-showcase relative min-h-screen overflow-hidden"
      aria-labelledby="algovision-heading"
    >
      <div className="project-showcase-grid absolute inset-0" aria-hidden />
      <div className="project-showcase-glow absolute inset-0" aria-hidden />
      <div className="container-content relative z-10">
        <h2 id="algovision-heading" className="sr-only">
          {project.title}
        </h2>
        {content}
      </div>
    </section>
  );
}
