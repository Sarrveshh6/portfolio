import { projects } from '../../data/projects';
import FadeIn from '../animations/FadeIn';
import FeaturedProjectCard from '../ui/FeaturedProjectCard';
import ProjectCard from '../ui/ProjectCard';

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured && !p.showcaseOnly);

  if (!featured && others.length === 0) {
    return null;
  }

  return (
    <section id="projects-more" className="section-padding bg-bg-alt">
      <div className="container-content">
        {featured && (
          <FadeIn>
            <FeaturedProjectCard project={featured} />
          </FadeIn>
        )}

        {others.length > 0 && (
          <div className={`grid gap-8 md:grid-cols-2 ${featured ? 'mt-12' : ''}`}>
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
