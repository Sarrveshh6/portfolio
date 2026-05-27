import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { personal, navLinks, navSectionIds } from '../../data/personal';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useActiveSection } from '../../hooks/useActiveSection';
import Button from '../ui/Button';

export default function Navbar() {
  const isScrolled = useScrollPosition(40);
  const activeSection = useActiveSection(navSectionIds, { offset: 96 });
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0)',
          borderColor: isScrolled ? 'var(--color-border)' : 'transparent',
        }}
        className="fixed top-0 z-50 w-full border-b backdrop-blur-md transition-colors"
        aria-label="Main navigation"
      >
        <div className="container-content flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-tight md:text-xl"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {personal.name}
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = isHome && activeSection === id;
              return (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent'
                      : 'text-text-secondary hover:text-text'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href={personal.resumePath}
              variant="secondary"
              size="sm"
              download
            >
              Resume
            </Button>
            <Button href={isHome ? '#contact' : '/#contact'} variant="primary" size="sm">
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <HiMenuAlt3 className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg-dark/95 backdrop-blur-sm lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-display text-lg font-bold text-white">{personal.shortName}</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border-dark text-white"
                aria-label="Close menu"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 px-6 pt-8">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = isHome && activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={handleNavClick}
                    aria-current={isActive ? 'location' : undefined}
                    className={`font-display text-3xl font-bold ${
                      isActive ? 'text-accent' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="mt-8 flex flex-col gap-3">
                <Button href={personal.resumePath} variant="inverse" download>
                  Download Resume
                </Button>
                <Button href={isHome ? '#contact' : '/#contact'} variant="primary" onClick={handleNavClick}>
                  Let&apos;s Talk
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
