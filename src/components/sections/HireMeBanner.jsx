import FadeIn from '../animations/FadeIn';

const BANNER_SRC = '/images/sections/hire-me-banner.png';

export default function HireMeBanner() {
  return (
    <section id="hire-me" className="bg-bg-alt py-12 md:py-16 lg:py-20" aria-label="Hire me">
      <div className="container-content">
        <FadeIn>
          <img
            src={BANNER_SRC}
            alt="Looking for a skilled developer — hire me. Full-stack developer and designer with tools including React, Node.js, Tailwind CSS, Figma, and more."
            className="mx-auto w-full max-w-5xl rounded-lg shadow-card"
            loading="lazy"
            decoding="async"
          />
        </FadeIn>
      </div>
    </section>
  );
}
