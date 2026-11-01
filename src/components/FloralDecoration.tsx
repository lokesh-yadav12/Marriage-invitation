import { motion } from 'framer-motion';

interface FloralDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}

export default function FloralDecoration({ position, className = '' }: FloralDecorationProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} pointer-events-none opacity-30 ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floral corner design */}
        <path
          d="M0 0 Q30 10 50 40 Q20 30 0 50 Z"
          fill="currentColor"
          className="text-gold"
          opacity="0.5"
        />
        <path
          d="M0 0 Q10 30 40 50 Q30 20 50 0 Z"
          fill="currentColor"
          className="text-gold"
          opacity="0.7"
        />
        <circle cx="40" cy="40" r="8" fill="currentColor" className="text-gold-light" />
        <circle cx="25" cy="25" r="5" fill="currentColor" className="text-gold" />
        <circle cx="15" cy="35" r="4" fill="currentColor" className="text-gold-light" />
        <circle cx="35" cy="15" r="4" fill="currentColor" className="text-gold-light" />
      </svg>
    </motion.div>
  );
}
