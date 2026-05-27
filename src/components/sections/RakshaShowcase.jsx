import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { rakshaShowcase } from '../../data/rakshaShowcase';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function RakshaShowcase({ embedded = true }) {
  const project = rakshaShowcase;

  const content = (
    <div className="mx-auto grid w-full max-w-[90rem] min-h-screen min-h-[100dvh] gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:px-14 lg:py-20 xl:gap-16">
      {/* Left — editorial content */}
      <div className="flex flex-col justify-center space-y-5 md:space-y-6">
        <FadeIn>
          <span className="raksha-pill">{project.pill}</span>
        </FadeIn>

        <FadeIn delay={0.04}>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5f0e6]/60">
            {project.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h3 id="raksha-heading" className="raksha-title-blocks font-display font-bold uppercase">
            {project.titleBlocks.map((block) => (
              <span key={block} className="block leading-[0.9] tracking-tight">
                {block}
              </span>
            ))}
          </h3>
          <p className="raksha-tagline mt-4 whitespace-pre-line font-display text-xl font-semibold text-[#f5f0e6] md:text-2xl">
            {project.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="max-w-lg text-sm leading-relaxed text-[#f5f0e6]/85 md:text-base">
            {project.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-sm font-semibold text-[#f5f0e6]">{project.toolsLabel}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="raksha-tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="flex flex-wrap items-end gap-4">
          <div className="raksha-sticker">
            <span className="raksha-sticker-icon" aria-hidden>
              ♥
            </span>
            <p className="raksha-sticker-label">{project.sticker.label}</p>
            <p className="raksha-sticker-text">{project.sticker.text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.links.live}
              className="raksha-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo →
            </a>
            <a
              href={project.links.github}
              className="raksha-link-btn raksha-link-btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Right — prototype placeholder */}
      <FadeIn delay={0.1} className="relative flex h-full min-h-[280px] items-center lg:min-h-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="raksha-visual-wrap h-full w-full"
        >
          <div className="raksha-visual-frame">
            <div
              className={`raksha-visual-inner ${project.preview ? 'raksha-visual-inner--filled' : ''}`}
            >
              {project.preview ? (
                <img
                  src={project.preview}
                  alt={`${project.titleBlocks.join('')} app preview`}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <>
                  <HiOutlinePhotograph className="h-10 w-10 text-[#f5f0e6]/30" />
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-[#f5f0e6]/50">
                    {project.placeholder.label}
                  </p>
                  <p className="mt-2 max-w-[240px] text-center text-[11px] text-[#f5f0e6]/40">
                    {project.placeholder.hint}
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </FadeIn>
    </div>
  );

  if (embedded) {
    return (
      <section
        className="raksha-showcase relative w-full overflow-hidden"
        aria-labelledby="raksha-heading"
      >
        <div className="raksha-showcase-grid absolute inset-0" aria-hidden />
        <div className="relative z-10 w-full">{content}</div>
      </section>
    );
  }

  return (
    <section
      id="raksha"
      className="raksha-showcase relative w-full min-h-screen overflow-hidden"
      aria-labelledby="raksha-heading"
    >
      <div className="raksha-showcase-grid absolute inset-0" aria-hidden />
      <div className="relative z-10 w-full">{content}</div>
    </section>
  );
}
