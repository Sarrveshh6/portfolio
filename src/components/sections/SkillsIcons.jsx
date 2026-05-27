export function SparkleIcon({ className = '' }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
    </svg>
  );
}

export function DecoProfileLine({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M60 20 C75 45 90 80 70 110 C50 140 30 160 55 190 C80 220 65 250 60 270" />
      <path d="M60 270 C45 255 35 240 50 225" />
    </svg>
  );
}
