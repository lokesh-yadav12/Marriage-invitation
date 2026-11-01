import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import FloralDecoration from '../components/FloralDecoration';
import { blessings } from '../data/weddingData';

export default function HomePage() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Floating petals animation
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  return (
    <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-maroon via-maroon-dark to-maroon">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200, 164, 93, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-3 h-3 rounded-full bg-gold/30"
          initial={{ y: -20, x: `${petal.left}vw`, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 0.6, 0.6, 0],
            rotate: 360,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Floral Corner Decorations */}
      <FloralDecoration position="top-left" />
      <FloralDecoration position="top-right" />
      <FloralDecoration position="bottom-left" />
      <FloralDecoration position="bottom-right" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        {/* Ornamental Frame - Responsive */}
        <div className="relative border-2 border-gold/40 rounded-xl p-8 sm:p-12 md:p-16 lg:p-20">
          {/* Inner decorative border */}
          <div className="absolute inset-4 border border-gold/20 rounded-lg pointer-events-none" />
          
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold rounded-br-xl" />

        {showContent && (
          <div className="relative z-10 space-y-6 sm:space-y-8">
            {/* Ganesh Blessing */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <p className="font-hindi text-lg sm:text-xl md:text-2xl text-gold-light">{blessings.sanskrit}</p>
              <p className="font-hindi text-xs sm:text-sm text-ivory/80 max-w-md mx-auto leading-relaxed px-4">
                {blessings.verse1}
              </p>
              <p className="font-hindi text-xs sm:text-sm text-ivory/80 max-w-md mx-auto leading-relaxed px-4">
                {blessings.verse2}
              </p>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              <h1 className="font-hindi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text px-4">
                शुभ विवाह
              </h1>
              <div className="w-16 sm:w-24 h-1 bg-gold mx-auto rounded-full" />
            </motion.div>

            {/* Invitation Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-2 sm:space-y-3 px-4"
            >
              <p className="font-hindi text-base sm:text-lg md:text-xl text-ivory/90">
                {blessings.message}
              </p>
              <p className="text-ivory/80 font-serif text-sm sm:text-base md:text-lg">
                Together with our families
              </p>
              <p className="text-ivory/70 text-sm sm:text-base">
                We joyfully invite you to celebrate
              </p>
            </motion.div>

            {/* Couples Names */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4 sm:space-y-6 py-4 sm:py-6 px-4"
            >
              <div className="space-y-1 sm:space-y-2">
                <p className="text-ivory/60 text-xs sm:text-sm uppercase tracking-wider">First Celebration</p>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-light">
                   Ekta <span className="text-gold">&</span> Vikas
                </p>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <p className="text-ivory/60 text-xs sm:text-sm uppercase tracking-wider">Second Celebration</p>
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-light">
                   Bijendra<span className="text-gold">&</span> Priyanka 
                </p>
              </div>
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="space-y-1 sm:space-y-2 px-4"
            >
              <p className="font-serif text-xl sm:text-2xl text-gold">December 2026</p>
              <p className="text-ivory/70 text-sm sm:text-base">Gunti, Bahroi, Rajasthan</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="px-4"
            >
              <button
                onClick={() => navigate('/events')}
                className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-maroon font-semibold text-base sm:text-lg rounded-full overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Enter the Wedding Celebration</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </motion.div>
          </div>
        )}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gold/60"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
