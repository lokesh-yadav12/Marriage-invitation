import { motion } from 'framer-motion';

interface OrnamentalDividerProps {
  className?: string;
}

export default function OrnamentalDivider({ className = '' }: OrnamentalDividerProps) {
  return (
    <motion.div 
      className={`flex items-center justify-center my-8 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <svg
        width="200"
        height="40"
        viewBox="0 0 200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-xs"
      >
        {/* Left ornament */}
        <path
          d="M10 20 L40 20 M35 15 L40 20 L35 25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gold"
        />
        
        {/* Center lotus */}
        <circle cx="100" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" />
        <circle cx="100" cy="20" r="4" fill="currentColor" className="text-gold" />
        <path
          d="M100 12 Q95 16 100 20 Q105 16 100 12 Z"
          fill="currentColor"
          className="text-gold opacity-60"
        />
        <path
          d="M100 28 Q95 24 100 20 Q105 24 100 28 Z"
          fill="currentColor"
          className="text-gold opacity-60"
        />
        <path
          d="M92 20 Q96 15 100 20 Q96 25 92 20 Z"
          fill="currentColor"
          className="text-gold opacity-60"
        />
        <path
          d="M108 20 Q104 15 100 20 Q104 25 108 20 Z"
          fill="currentColor"
          className="text-gold opacity-60"
        />
        
        {/* Right ornament */}
        <path
          d="M160 20 L190 20 M165 15 L160 20 L165 25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-gold"
        />
      </svg>
    </motion.div>
  );
}
