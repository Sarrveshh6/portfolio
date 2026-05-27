import { useEffect, useState } from 'react';

/**
 * Highlights the section currently in view while scrolling.
 * Uses scroll position (works well with full-height sections).
 */
export function useActiveSection(sectionIds, options = {}) {
  const { offset = 100 } = options;
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'hero');

  useEffect(() => {
    const update = () => {
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!elements.length) return;

      const scrollMarker = window.scrollY + offset;
      let current = sectionIds[0];

      for (const el of elements) {
        if (el.offsetTop <= scrollMarker) {
          current = el.id;
        }
      }

      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        current = elements[elements.length - 1].id;
      }

      setActiveId(current);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [sectionIds, offset]);

  return activeId;
}
