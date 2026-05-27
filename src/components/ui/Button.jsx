import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-dark border border-transparent',
  secondary:
    'bg-transparent text-text border border-border hover:border-text',
  ghost: 'bg-transparent text-text-muted hover:text-text border border-transparent',
  inverse:
    'bg-white text-bg-dark hover:bg-bg-alt border border-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  download,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    const isHash = href.startsWith('#');

    if (isHash) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }

    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
