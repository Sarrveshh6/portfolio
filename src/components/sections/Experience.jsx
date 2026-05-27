import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { experience } from '../../data/experience';
import { experiencePage } from '../../data/experiencePage';
import { skillTabs } from '../../data/skillsPage';
import { personal } from '../../data/personal';

function ExperienceEntry({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="experience-entry border-b border-white/10 pb-8 last:border-b-0 last:pb-0"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-[#f5f0e6]/60">
        {item.type} · {item.location}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">{item.role}</h3>
      <p className="mt-1 text-base font-semibold text-[#f97316]">{item.company}</p>
      <p className="mt-1 font-mono text-sm text-[#f5f0e6]/75">{item.dateRange}</p>

      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#f5f0e6]/90 md:text-base">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97316]" aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-[#f5f0e6]/90"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Experience() {
  const tools = skillTabs.slice(0, 8);

  return (
    <section
      id="experience"
      className="experience-showcase relative min-h-screen overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="experience-showcase-grid absolute inset-0" aria-hidden />
      <div className="experience-showcase-glow absolute inset-0" aria-hidden />

      <div className="container-content relative z-10 px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
        {/* Top pill */}
        <FadeIn>
          <span className="experience-pill">{experiencePage.pill}</span>
        </FadeIn>

        <div className="experience-layout mt-10 grid gap-12 lg:grid-cols-[minmax(260px,42%)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          {/* Left — big Experience title */}
          <FadeIn className="experience-headline-col w-full min-w-0 lg:sticky lg:top-24 lg:z-0 lg:max-w-[520px] lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f5f0e6]/60">
              {experiencePage.eyebrow}
            </p>
            <h2 id="experience-heading" className="experience-headline mt-4 w-full">
              <span className="experience-headline-line1 block font-display font-bold">
                {experiencePage.headline.line1}
              </span>
              <span className="experience-headline-line2 block font-display font-bold">
                {experiencePage.headline.line2Parts.map((part) => (
                  <span key={part} className="experience-headline-line2-part block">
                    {part}
                  </span>
                ))}
              </span>
            </h2>
            <div className="experience-highlight-box mt-10 hidden max-w-sm lg:block">
              <p className="font-mono text-xs uppercase tracking-widest text-[#f97316]">
                {experiencePage.highlight.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f0e6]/90">
                {experiencePage.highlight.body}
              </p>
            </div>
          </FadeIn>

          {/* Right — experience content */}
          <div className="relative z-10 min-w-0 space-y-10">
            {experience.map((item, index) => (
              <ExperienceEntry key={item.id} item={item} index={index} />
            ))}

            <div className="experience-highlight-box lg:hidden">
              <p className="font-mono text-xs uppercase tracking-widest text-[#f97316]">
                {experiencePage.highlight.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#f5f0e6]/90">
                {experiencePage.highlight.body}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom tools row */}
        <FadeIn delay={0.15} className="mt-16 border-t border-white/10 pt-10">
          <p className="font-display text-lg font-semibold text-[#f5f0e6] md:text-xl">
            {experiencePage.toolsLabel}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="experience-tool-chip">
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      <p className="sr-only">
        Professional experience for {personal.name}:{' '}
        {experience.map((e) => `${e.role} at ${e.company}`).join('; ')}
      </p>
    </section>
  );
}
