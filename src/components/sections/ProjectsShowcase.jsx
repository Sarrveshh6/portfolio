import FadeIn from '../animations/FadeIn';
import { projectsIntro } from '../../data/projectsPage';
import AlgovisionShowcase from './AlgovisionShowcase';
import MockmasterShowcase from './MockmasterShowcase';
import RakshaShowcase from './RakshaShowcase';
import DhoniTributeShowcase from './DhoniTributeShowcase';
import GauGyaanShowcase from './GauGyaanShowcase';

export default function ProjectsShowcase() {
  return (
    <>
      {/* Intro — dark purple */}
      <section
        id="projects"
        className="project-showcase relative w-full overflow-hidden"
        aria-labelledby="projects-heading"
      >
        <div className="project-showcase-grid absolute inset-0" aria-hidden />
        <div className="project-showcase-glow absolute inset-0" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20 lg:px-14">
          <FadeIn>
            <span className="project-pill">{projectsIntro.pill}</span>
            <h2
              id="projects-heading"
              className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {projectsIntro.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              {projectsIntro.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <AlgovisionShowcase embedded />
      <MockmasterShowcase embedded />
      <RakshaShowcase embedded />
      <DhoniTributeShowcase embedded />
      <GauGyaanShowcase embedded />
    </>
  );
}
