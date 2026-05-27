import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

export default function CertificationCard({ cert, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        className="rounded-xl border border-border bg-bg p-6 transition-shadow hover:shadow-card-hover"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-bg-alt font-mono text-xs font-bold text-text-muted">
          {cert.issuer.slice(0, 2).toUpperCase()}
        </div>
        <h3 className="mb-1 font-display text-lg font-bold">{cert.name}</h3>
        <p className="text-sm text-text-muted">{cert.issuer}</p>
        <p className="mt-2 font-mono text-xs text-text-subtle">{cert.date}</p>
        {cert.verifyUrl && (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
          >
            Verify →
          </a>
        )}
      </motion.div>
    </FadeIn>
  );
}
