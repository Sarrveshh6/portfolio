import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutCopy } from '../../data/personal';
import { aboutPage } from '../../data/aboutPage';
import FadeIn from '../animations/FadeIn';
import Button from '../ui/Button';

function Stat({ value, suffix, label, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className={`about-stat-card rounded-xl border border-[#1a1a1a]/10 bg-white/70 p-4 shadow-sm ${className}`}
    >
      <p className="font-display text-3xl font-bold text-[#1a1a1a] md:text-4xl">
        {inView ? <CountUp end={value} duration={2} suffix={suffix} /> : `0${suffix}`}
      </p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wide text-[#1a1a1a]/60">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  const [line1, line2] = aboutCopy.subheadline.split('\n');

  return (
    <section
      id="about"
      className="about-showcase relative min-h-screen overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="about-showcase-grid absolute inset-0" aria-hidden />

      <div className="container-content relative z-10 px-6 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <FadeIn>
          <span className="about-pill">{aboutPage.pill}</span>
        </FadeIn>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20">
          {/* Left — content collage */}
          <div className="about-content-col space-y-6">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                {aboutPage.eyebrow}
              </p>
            </FadeIn>

            <FadeIn delay={0.05} className="about-text-card max-w-xl">
              <div className="space-y-4 text-sm leading-relaxed text-[#1a1a1a]/85 md:text-base">
                {aboutCopy.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="about-terminal-card max-w-md rotate-[-1deg]">
              <p className="font-mono text-sm text-[#c45c26]">$ whoami</p>
              <p className="mt-2 font-mono text-sm text-[#1a1a1a]/70">full-stack developer</p>
              <p className="mt-4 font-mono text-sm text-[#c45c26]">$ cat focus.txt</p>
              <p className="mt-2 font-mono text-sm text-[#1a1a1a]/80">
                React · Node.js · Performance · UX · AI Products
              </p>
              <p className="mt-4 font-mono text-sm text-[#c45c26]">$ status</p>
              <p className="mt-2 font-mono text-sm text-[#1a1a1a]/80">open_to_opportunities = true</p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 sm:max-w-lg">
              {aboutCopy.stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.12 + i * 0.04}>
                  <Stat
                    {...stat}
                    className={i % 2 === 1 ? 'rotate-[1.5deg]' : 'rotate-[-1deg]'}
                  />
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.2}>
              <Button href={aboutCopy.cta.href} variant="primary">
                {aboutCopy.cta.label} →
              </Button>
            </FadeIn>

            <FadeIn delay={0.22} className="about-testimonial-box max-w-xl">
              <p className="font-display text-base font-semibold text-[#1a1a1a]">
                {aboutPage.testimonial.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1a1a1a]/80 md:text-base">
                {aboutPage.testimonial.body}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-display text-lg font-semibold text-[#1a1a1a]">
                {aboutPage.toolsLabel}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {aboutPage.tools.map((tool) => (
                  <span key={tool} className="about-tool-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right — big headline */}
          <FadeIn className="lg:sticky lg:top-24 lg:self-start">
            <h2 id="about-heading" className="about-headline leading-[1.05]">
              <span className="about-headline-serif block">{line1}</span>
              {line2 && (
                <span className="about-headline-accent mt-1 block">{line2}</span>
              )}
            </h2>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
