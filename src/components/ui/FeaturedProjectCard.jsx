import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import Button from './Button';
import Badge from './Badge';

export default function FeaturedProjectCard({ project }) {
  return (
    <FadeIn className="overflow-hidden rounded-2xl border border-border bg-bg shadow-card">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <p className="mb-4 font-mono text-sm text-accent">{project.number}</p>
          <h3 className="mb-4 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {project.title}
          </h3>
          <p className="mb-2 text-lg font-medium text-text-secondary">{project.tagline}</p>
          <p className="mb-6 max-w-xl text-body-l text-text-muted">{project.description}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={project.liveUrl} variant="primary">
              Live Demo →
            </Button>
            <Button href={project.githubUrl} variant="secondary">
              View Code
            </Button>
            {project.hasCaseStudy && (
              <Button to={`/projects/${project.slug}`} variant="ghost">
                Case Study →
              </Button>
            )}
          </div>
        </div>

        <motion.div
          className="relative min-h-[280px] bg-bg-alt lg:min-h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex h-full min-h-[280px] items-center justify-center p-8 font-mono text-text-muted">
            <span className="text-center text-sm">Project mockup — add /public/images/projects/mockmaster.webp</span>
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}
