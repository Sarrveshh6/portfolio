import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { gauGyaanShowcase } from '../../data/gauGyaanShowcase';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function GauGyaanShowcase({ embedded = true }) {
  const project = gauGyaanShowcase;

  const content = (
    <div className="mx-auto grid w-full max-w-[90rem] min-h-screen min-h-[100dvh] gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-20 xl:gap-16">
      {/* Left — preview */}
      <FadeIn className="relative order-2 flex h-full min-h-[280px] items-center lg:order-1 lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gau-visual-wrap h-full w-full"
        >
          <div className="gau-visual-frame">
            <div className="gau-visual-inner">
              <HiOutlinePhotograph className="h-10 w-10 opacity-30" />
              <p className="mt-3 font-mono text-xs uppercase tracking-widest opacity-60">
                {project.placeholder.label}
              </p>
              <p className="mt-2 max-w-[240px] text-center text-[11px] opacity-50">
                {project.placeholder.hint}
              </p>
            </div>
          </div>
          <span className="gau-deco gau-deco--leaf" aria-hidden />
          <span className="gau-deco gau-deco--dot" aria-hidden />
        </motion.div>
      </FadeIn>

      {/* Right — content */}
      <div className="order-1 flex flex-col justify-center lg:order-2">
        <div className="gau-content-panel space-y-4 md:space-y-5">
          <FadeIn>
            <span className="gau-pill">{project.pill}</span>
          </FadeIn>

          <FadeIn delay={0.04}>
            <p className="gau-eyebrow font-mono text-[11px] uppercase tracking-[0.18em]">
              {project.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h3
              id="gau-gyaan-heading"
              className="gau-title font-display font-bold tracking-tight"
            >
              {project.title}
            </h3>
            <p className="gau-subtitle mt-2 font-display text-xl font-semibold md:text-2xl">
              {project.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="gau-body max-w-lg text-sm leading-relaxed md:text-[15px] md:leading-relaxed">
              {project.description}
            </p>
            <p className="gau-highlight mt-3 font-mono text-xs font-semibold uppercase tracking-wide">
              {project.highlight}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="gau-tools-label text-sm font-semibold">{project.toolsLabel}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="gau-tool-chip">
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="flex flex-wrap gap-3 pt-1">
            <a
              href={project.links.live}
              className="gau-link-btn gau-link-btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo →
            </a>
            <a
              href={project.links.github}
              className="gau-link-btn gau-link-btn--ghost"
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
        className="gau-showcase relative w-full overflow-hidden"
        aria-labelledby="gau-gyaan-heading"
      >
        <div className="gau-showcase-grid absolute inset-0" aria-hidden />
        <div className="relative z-10 w-full">{content}</div>
      </section>
    );
  }

  return (
    <section
      id="gau-gyaan"
      className="gau-showcase relative w-full min-h-screen overflow-hidden"
      aria-labelledby="gau-gyaan-heading"
    >
      <div className="gau-showcase-grid absolute inset-0" aria-hidden />
      <div className="relative z-10 w-full">{content}</div>
    </section>
  );
}
