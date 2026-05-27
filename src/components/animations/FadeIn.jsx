import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

export default function FadeIn({
  children,
  delay = 0,
  className = '',
  y = 30,
  as = 'div',
  ...props
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
