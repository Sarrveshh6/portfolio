import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import { personal } from '../data/personal';
import FadeIn from '../components/animations/FadeIn';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionLabel from '../components/ui/SectionLabel';

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  if (!project || !project.caseStudy) {
    return <Navigate to="/" replace />;
  }

  const { caseStudy } = project;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <Helmet>
        <title>
          {project.title} — Case Study | {personal.name}
        </title>
        <meta name="description" content={project.description} />
      </Helmet>

      <header className="section-padding bg-bg-alt">
        <div className="container-content">
          <Link to="/#projects" className="font-mono text-sm text-accent hover:underline">
            ← Back to work
          </Link>
          <p className="mt-8 font-mono text-sm text-accent">{project.number}</p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-text-muted">{project.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={project.liveUrl} variant="primary">
              Live Demo →
            </Button>
            <Button href={project.githubUrl} variant="secondary">
              View Code
            </Button>
          </div>
        </div>
      </header>

      <div className="section-padding">
        <div className="container-content max-w-3xl space-y-16">
          <FadeIn>
            <SectionLabel>Problem</SectionLabel>
            <p className="mt-4 text-lg text-text-secondary">{caseStudy.problem}</p>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Solution</SectionLabel>
            <p className="mt-4 text-lg text-text-secondary">{caseStudy.solution}</p>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Outcome</SectionLabel>
            <p className="mt-4 text-lg text-text-secondary">{caseStudy.outcome}</p>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Highlights</SectionLabel>
            <ul className="mt-4 space-y-3">
              {caseStudy.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-text-secondary">
                  <span className="text-accent" aria-hidden>
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>

      <nav className="border-t border-border py-12">
        <div className="container-content flex justify-between gap-8">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="group">
              <span className="font-mono text-xs text-text-muted">Previous</span>
              <p className="font-display text-lg font-bold group-hover:text-accent">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/projects/${next.slug}`} className="group text-right">
              <span className="font-mono text-xs text-text-muted">Next</span>
              <p className="font-display text-lg font-bold group-hover:text-accent">
                {next.title} →
              </p>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </motion.article>
  );
}
