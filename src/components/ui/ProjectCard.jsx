import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from './Badge';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group overflow-hidden rounded-xl border border-border bg-bg shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="relative aspect-video overflow-hidden bg-bg-alt">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg-alt to-border font-mono text-sm text-text-muted">
          {project.title}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-sm text-text-muted">{project.year}</span>
          <span className="rounded-full bg-bg-alt px-2 py-1 text-xs text-text-secondary">
            {project.category}
          </span>
        </div>
        <p className="mb-1 font-mono text-xs text-accent">{project.number}</p>
        <h3 className="mb-2 text-xl font-bold font-display">{project.title}</h3>
        <p className="mb-4 text-sm text-text-muted">{project.tagline}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text"
            >
              GitHub
            </a>
          )}
          {project.hasCaseStudy && (
            <Link
              to={`/projects/${project.slug}`}
              className="text-sm font-medium text-text hover:text-accent"
            >
              Case Study →
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
