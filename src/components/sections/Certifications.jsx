import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import { verifiedLearningCopy } from '../../data/certificationsPage';
import FadeIn from '../animations/FadeIn';

const cardRotations = [-6, 4, -3, 5, -4];

function CourseCard({ cert, index }) {
  const rotate = cardRotations[index % cardRotations.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, rotate: rotate + 2, zIndex: 20 }}
      className="verified-course-card shrink-0"
      style={{ zIndex: index }}
    >
      <div className="verified-course-photo">
        <span className="verified-course-badge font-mono text-xs font-bold uppercase">
          {cert.issuer.slice(0, 2)}
        </span>
        <p className="mt-3 font-display text-sm font-bold leading-tight text-[#1a1a1a]">
          {cert.name}
        </p>
        <p className="mt-1 font-mono text-[10px] text-[#1a1a1a]/60">{cert.date}</p>
      </div>
      <div className="verified-course-caption">
        <p className="font-mono text-[10px] uppercase tracking-wide text-[#1a1a1a]/70">
          {cert.issuer}
        </p>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-[11px] font-semibold text-hero-red hover:underline"
          >
            Verify credential →
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="verified-learning relative flex min-h-screen min-h-[100dvh] w-full flex-col overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      <div className="verified-learning-grid absolute inset-0" aria-hidden />
      <div className="verified-learning-leaves absolute inset-0" aria-hidden />

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Top pill */}
        <FadeIn className="px-6 pt-10 md:px-10 md:pt-12 lg:px-14">
          <span className="verified-pill">{verifiedLearningCopy.pill}</span>
        </FadeIn>

        {/* Center — headline */}
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center md:py-16">
          <FadeIn className="verified-headline-frame relative">
            <h2 id="certifications-heading" className="sr-only">
              Verified Learning — certifications and courses
            </h2>
            <p className="verified-headline-outline font-serif">{verifiedLearningCopy.outline}</p>
            <p className="verified-headline-solid font-display">{verifiedLearningCopy.solid}</p>
            <span className="verified-headline-label mt-5 inline-block font-mono text-xs uppercase tracking-widest">
              {verifiedLearningCopy.subtitle}
            </span>
          </FadeIn>
        </div>

        {/* Bottom — polaroid course cards */}
        <div className="verified-courses-row px-4 pb-10 pt-4 md:px-8 md:pb-14 lg:px-12">
          <div className="mx-auto flex max-w-[1100px] items-end justify-center gap-3 overflow-x-auto pb-4 md:gap-4">
            {certifications.map((cert, index) => (
              <CourseCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
