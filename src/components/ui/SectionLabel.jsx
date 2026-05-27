export default function SectionLabel({ children, className = '', dark = false }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.12em] ${dark ? 'text-text-subtle' : 'text-text-muted'} ${className}`}
    >
      {children}
    </p>
  );
}
