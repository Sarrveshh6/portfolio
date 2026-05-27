import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { heroZine } from '../../data/hero';
import { personal } from '../../data/personal';
import { marqueeItems } from '../../data/personal';
import Button from '../ui/Button';
import HeroImageSlot from './HeroImageSlot';
import { HeroBioText } from './HeroBioText';

function PolaroidSlot({ polaroid }) {
  const hasImage = Boolean(polaroid.src);

  return (
    <figure
      className="hero-polaroid shrink-0"
      style={{ transform: `rotate(${polaroid.rotate}deg)` }}
    >
      <div className="hero-polaroid-frame">
        {hasImage ? (
          <img
            src={polaroid.src}
            alt={polaroid.caption || 'Portfolio moment'}
            className={`h-full w-full ${polaroid.fit === 'contain' ? 'object-contain bg-white' : 'object-cover'}`}
            style={
              polaroid.imageRotate
                ? { transform: `rotate(${polaroid.imageRotate}deg) scale(1.15)` }
                : undefined
            }
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[#e8e4dc] p-3 text-center">
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
              Photo slot
            </span>
            <span className="mt-1 text-[10px] text-text-subtle">
              public/images/hero/polaroids/
            </span>
          </div>
        )}
      </div>
      {polaroid.caption && (
        <figcaption className="hero-polaroid-caption">{polaroid.caption}</figcaption>
      )}
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero-zine relative bg-[#f8f6f1] pt-16 md:pt-20">
      {/* Full-width split: image leftmost | text separated on the right */}
      <div className="flex w-full flex-col lg:flex-row lg:items-stretch">
        <HeroImageSlot portrait={heroZine.portrait} sticker={heroZine.sticker} />

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-zine-content flex min-w-0 flex-1 flex-col px-5 py-8 sm:px-8 md:py-10 lg:px-10 xl:px-14"
        >
          {/* Heading + bio — no image overlap */}
          <header>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
              {heroZine.heading.prefix}{' '}
              <span className="text-hero-red">{heroZine.heading.name}</span>
            </h1>
            <div className="mt-5">
              <HeroBioText parts={heroZine.bioRich} />
            </div>
          </header>

          {/* Info grid — Experience | Studies | Focus + Tools */}
          <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_1fr]">
            <div>
              <h2 className="hero-zine-label">{heroZine.experienceTitle}</h2>
              <ul className="mt-4 space-y-4">
                {heroZine.experience.map((item) => (
                  <li
                    key={`${item.company}-${item.period}`}
                    className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5 text-sm"
                  >
                    <span
                      className={`font-mono text-xs font-semibold uppercase tracking-wide ${
                        item.periodColor === 'green' ? 'text-emerald-600' : 'text-hero-red'
                      }`}
                    >
                      {item.period}
                    </span>
                    <div>
                      <p className="font-semibold text-text">{item.role}</p>
                      <p className="text-text-muted">{item.company}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="hero-zine-label">{heroZine.studiesTitle}</h2>
              <ul className="mt-4 space-y-4">
                {heroZine.studies.map((study) => (
                  <li key={study.name} className="flex gap-3 text-sm">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white text-xs font-bold shadow-sm"
                      aria-hidden
                    >
                      {study.issuer.slice(0, 2).toUpperCase()}
                    </span>
                    <div>
                      <p className="font-semibold text-text">{study.name}</p>
                      <p className="text-text-muted">
                        {study.issuer} · {study.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 xl:col-span-1">
              <h2 className="hero-zine-label">{heroZine.focusTitle}</h2>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-text-secondary">
                {heroZine.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-text-muted">
                <a href="#skills" className="font-semibold text-hero-red underline-offset-2 hover:underline">
                  Skills &amp; Tools Used
                </a>{' '}
                on the next section ↓
              </p>
            </div>
          </div>

          {/* Polaroid row — separate image slots */}
          <div className="mt-12 border-t border-[#ddd8ce] pt-10">
            <div className="flex gap-5 overflow-x-auto pb-4">
              {heroZine.polaroids.map((p) => (
                <PolaroidSlot key={p.id} polaroid={p} />
              ))}
            </div>
          </div>

          {/* CTAs + social */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={heroZine.ctas.primary.href} variant="primary" size="lg">
              {heroZine.ctas.primary.label} →
            </Button>
            <Button
              href={heroZine.ctas.secondary.href}
              variant="secondary"
              size="lg"
              download={heroZine.ctas.secondary.download}
            >
              {heroZine.ctas.secondary.label}
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-hero-red transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-hero-red transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-muted hover:text-hero-red transition-colors"
              aria-label="Email"
            >
              <HiOutlineMail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom branding ticker */}
      <div className="border-t border-black bg-black py-3 text-white" aria-hidden>
        <Marquee speed={35} gradient={false} pauseOnHover>
          {marqueeItems.map((item) => (
            <span key={item} className="mx-6 flex items-center gap-3 font-display text-sm font-bold">
              <span className="text-hero-red" aria-hidden>
                ◆
              </span>
              {item}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
