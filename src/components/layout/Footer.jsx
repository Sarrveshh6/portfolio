import { Link } from 'react-router-dom';
import { personal } from '../../data/personal';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import FadeIn from '../animations/FadeIn';

const closingNav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-bg text-text">
      <div className="container-content relative z-10 flex flex-col items-center px-6 pb-36 pt-20 text-center md:pb-44 md:pt-28">
        <FadeIn>
          <p className="max-w-xl text-sm leading-relaxed text-text-secondary md:max-w-2xl md:text-base">
            Expertly crafted with great care, built with clean and efficient code.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary md:max-w-2xl md:text-base">
            Thank you for stopping by — let&apos;s create something truly amazing and
            exceptionally extraordinary together.
          </p>

          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-8 md:mt-12"
            aria-label="Footer navigation"
          >
            {closingNav.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-text transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </FadeIn>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span className="select-none font-display text-[clamp(5.5rem,22vw,13.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-text/[0.14] translate-y-[10%]">
          SARVESH
        </span>
      </div>

      <div className="relative z-10 border-t border-border bg-bg">
        <div className="container-content flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
          <p className="text-center text-xs text-text-muted md:text-left">
            © {year}, All Right Reserved By Sarvesh
          </p>
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-text"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-text"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-text-secondary transition-colors hover:text-text"
              aria-label="Email"
            >
              <HiOutlineMail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
