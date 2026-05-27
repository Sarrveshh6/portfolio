export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </span>
  );
}
