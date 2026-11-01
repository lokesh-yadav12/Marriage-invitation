import { motion } from 'framer-motion';
import { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FloralDecoration from '../components/FloralDecoration';
import { allWeddings } from '../data/weddingData';

export default function CountdownPage() {
  const [selectedWedding, setSelectedWedding] = useState(0);
  const wedding = allWeddings[selectedWedding];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-4">
            Wedding Countdown
          </h1>
          <h2 className="font-hindi text-3xl md:text-4xl text-gold mb-6">
            विवाह की उलटी गिनती
          </h2>
          <p className="text-maroon/70 text-lg max-w-2xl mx-auto">
            The auspicious moments are approaching
          </p>
        </motion.div>

        <OrnamentalDivider />

        {/* Wedding Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white rounded-full shadow-luxury p-2">
            <button
              onClick={() => setSelectedWedding(0)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedWedding === 0
                  ? 'bg-gradient-to-r from-gold to-gold-light text-maroon shadow-md'
                  : 'text-maroon/60 hover:text-maroon'
              }`}
            >
              <span className="hidden sm:inline"> Ekta & Vikas</span>
              <span className="sm:hidden">Wedding 1</span>
            </button>
            <button
              onClick={() => setSelectedWedding(1)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedWedding === 1
                  ? 'bg-gradient-to-r from-gold to-gold-light text-maroon shadow-md'
                  : 'text-maroon/60 hover:text-maroon'
              }`}
            >
              <span className="hidden sm:inline">Bijendra & Priyanka</span>
              <span className="sm:hidden">Wedding 2</span>
            </button>
          </div>
        </motion.div>

        {/* Countdown Display */}
        <motion.div
          key={selectedWedding}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-2xl shadow-luxury p-8 md:p-16 overflow-hidden"
        >
          <FloralDecoration position="top-left" className="opacity-10" />
          <FloralDecoration position="bottom-right" className="opacity-10" />

          <div className="relative z-10">
            {/* Couple Names */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <p className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-3">
                {wedding.couple.bride.name} <span className="text-gold">&</span> {wedding.couple.groom.name}
              </p>
              <p className="font-hindi text-2xl text-gold">
                {wedding.couple.bride.nameHindi} <span className="text-maroon">&</span> {wedding.couple.groom.nameHindi}
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CountdownTimer
                targetDate={wedding.mainCeremonyDate}
                eventName={selectedWedding === 0 ? 'Wedding of Ekta & Vikas' : 'Wedding of Bijendra & Priyanka'}
              />
            </motion.div>
          </div>

          {/* Background Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(200, 164, 93, 0.4) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-maroon via-maroon-dark to-maroon rounded-2xl shadow-luxury p-8 text-center"
        >
          <p className="font-hindi text-2xl text-gold-light mb-3">
            आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी
          </p>
          <p className="text-ivory/90 text-lg mb-6">
            Mark your calendar and join us in this joyous celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/events"
              className="px-8 py-3 bg-gold text-maroon font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105"
            >
              View All Events
            </a>
            <a
              href="/rsvp"
              className="px-8 py-3 bg-transparent border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold/10 transition-all duration-300 hover:scale-105"
            >
              Confirm Your Presence
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
