import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhotograph } from 'react-icons/hi';

export default function HeroImageSlot({ portrait, sticker }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(portrait.src) && loaded && !failed;
  const showPlaceholder = !portrait.src || failed || !loaded;

  return (
    <aside
      className="hero-zine-image relative flex shrink-0 flex-col lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-[min(38vw,440px)]"
      aria-label="Portrait"
    >
      <div className="hero-graph-paper relative flex min-h-[360px] flex-1 items-end justify-center p-4 sm:min-h-[420px] lg:min-h-0 lg:p-6">
        {/* Image — only visual in this column */}
        {portrait.src && (
          <img
            src={portrait.src}
            alt={portrait.alt}
            className={`relative z-10 h-full w-full object-cover object-[50%_20%] transition-opacity duration-500 ${
              showImage ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
          />
        )}

        {/* Empty slot for your upload */}
        {showPlaceholder && (
          <div className="hero-image-placeholder absolute inset-4 z-10 flex flex-col items-center justify-center text-center sm:inset-6">
            <HiOutlinePhotograph className="mb-3 h-10 w-10 text-hero-red/60" aria-hidden />
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
              Your portrait
            </p>
            <p className="mt-2 max-w-[200px] text-sm text-text-secondary">{portrait.uploadHint}</p>
            <p className="mt-3 font-mono text-[10px] text-text-subtle">
              Then set HERO_PORTRAIT_SRC in src/data/hero.js
            </p>
          </div>
        )}

        {/* Speech bubble — separate from bio text */}
        <span className="hero-speech-bubble absolute right-4 top-[32%] z-20 max-w-[120px] font-mono text-[10px] leading-tight sm:right-6 sm:text-xs">
          {sticker}
        </span>

        {/* Brand tag on image (only when image visible) */}
        {showImage && (
          <div className="absolute bottom-8 left-6 z-20 sm:bottom-12 sm:left-8">
            <p className="font-display text-lg font-bold text-white drop-shadow-md sm:text-xl">
              {portrait.brandTag}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-hero-red sm:text-xs">
              {portrait.brandTagline}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
