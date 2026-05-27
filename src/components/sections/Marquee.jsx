import Marquee from 'react-fast-marquee';
import { marqueeItems } from '../../data/personal';

export default function MarqueeStrip() {
  return (
    <section aria-hidden className="border-y border-border-dark bg-bg-dark py-4 text-white">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {marqueeItems.map((item) => (
          <span key={item} className="mx-8 font-mono text-sm uppercase tracking-wider">
            {item} ·
          </span>
        ))}
      </Marquee>
    </section>
  );
}
