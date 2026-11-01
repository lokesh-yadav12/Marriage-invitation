import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FloralDecoration from '../components/FloralDecoration';
import { allWeddings, blessings } from '../data/weddingData';

export default function CouplePage() {
  const { weddingId } = useParams<{ weddingId: string }>();
  const wedding = allWeddings.find(w => w.id === weddingId) || allWeddings[0];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-maroon hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>

        {/* Blessing Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-hindi text-2xl text-gold mb-3">{blessings.sanskrit}</p>
          <p className="font-hindi text-base text-maroon/70 max-w-2xl mx-auto leading-relaxed">
            {blessings.message}
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white rounded-2xl shadow-luxury p-8 md:p-12 overflow-hidden"
        >
          <FloralDecoration position="top-left" className="opacity-20" />
          <FloralDecoration position="bottom-right" className="opacity-20" />

          {/* Ornamental Border */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <div className="relative z-10">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-4">
                Our Wedding
              </h1>
              <h2 className="font-hindi text-3xl md:text-4xl text-gold">
                हमारा विवाह
              </h2>
            </motion.div>

            <OrnamentalDivider />

            {/* Bride Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <div className="text-center max-w-md mx-auto">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
                    <Heart className="w-12 h-12 text-maroon fill-current" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-maroon mb-2">
                    {wedding.couple.bride.name}
                  </h3>
                  <p className="font-hindi text-2xl text-gold mb-4">
                    {wedding.couple.bride.nameHindi}
                  </p>
                </div>
                
                <div className="space-y-2 text-maroon/80">
                  <p className="text-lg">
                    <span className="font-semibold">Daughter of</span>
                  </p>
                  <p className="text-xl font-serif text-maroon">
                    {wedding.couple.bride.fatherName}
                  </p>
                  <p className="font-hindi text-lg text-gold/80">
                    {wedding.couple.bride.fatherNameHindi}
                  </p>
                  <p className="text-sm text-maroon/60 mt-4">
                    {wedding.couple.bride.residence}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Heart Divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center my-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
                <div className="relative">
                  <Heart className="w-8 h-8 text-gold fill-current animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 text-gold fill-current opacity-50 animate-ping" />
                </div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
              </div>
            </motion.div>

            {/* Groom Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12"
            >
              <div className="text-center max-w-md mx-auto">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <Heart className="w-12 h-12 text-maroon fill-current" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-maroon mb-2">
                    {wedding.couple.groom.name}
                  </h3>
                  <p className="font-hindi text-2xl text-gold mb-4">
                    {wedding.couple.groom.nameHindi}
                  </p>
                </div>
                
                <div className="space-y-2 text-maroon/80">
                  <p className="text-lg">
                    <span className="font-semibold">Son of</span>
                  </p>
                  <p className="text-xl font-serif text-maroon">
                    {wedding.couple.groom.fatherName}
                  </p>
                  <p className="font-hindi text-lg text-gold/80">
                    {wedding.couple.groom.fatherNameHindi}
                  </p>
                  <p className="text-sm text-maroon/60 mt-4">
                    {wedding.couple.groom.residence}
                  </p>
                </div>
              </div>
            </motion.div>

            <OrnamentalDivider className="mt-12" />

            {/* Wedding Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mt-12"
            >
              <p className="font-serif text-xl text-maroon/80 max-w-2xl mx-auto leading-relaxed">
                We joyfully invite you to witness and bless the sacred union of two souls, 
                two families, and two hearts becoming one.
              </p>
              <p className="font-hindi text-lg text-gold mt-4">
                आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी
              </p>
            </motion.div>

            {/* View Events Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/events"
                className="inline-block px-10 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-luxury transition-all duration-300 hover:scale-105"
              >
                View Wedding Events
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Wedding Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-8"
        >
          <Link
            to={`/couple/${wedding.id === 'vikas-priyanka' ? 'ekta-vilas' : 'vikas-priyanka'}`}
            className="inline-flex items-center space-x-2 text-maroon hover:text-gold transition-colors"
          >
            <span>View the {wedding.id === 'vikas-priyanka' ? 'Second' : 'First'} Celebration</span>
            <Heart className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
