import FadeIn from '../animations/FadeIn';
import Badge from './Badge';

export default function ExperienceItem({ item, index }) {
  return (
    <FadeIn delay={index * 0.1} className="relative grid gap-4 pb-12 md:grid-cols-[1fr_2fr] md:gap-12">
      <div>
        <p className="font-mono text-sm text-text-muted">{item.dateRange}</p>
        <h3 className="mt-1 font-display text-xl font-bold">{item.company}</h3>
        <p className="text-text-secondary">{item.role}</p>
        <p className="mt-1 text-sm text-text-muted">
          {item.location} · {item.type}
        </p>
      </div>
      <div>
        <ul className="mb-4 list-none space-y-2 text-text-secondary">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
