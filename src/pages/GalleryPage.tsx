import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import OrnamentalDivider from '../components/OrnamentalDivider';

export default function GalleryPage() {
  // Placeholder for when actual photos are provided
  const hasPhotos = false;

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-4">
            Wedding Memories
          </h1>
          <h2 className="font-hindi text-3xl md:text-4xl text-gold mb-6">
            यादगार पल
          </h2>
          <p className="text-maroon/70 text-lg max-w-2xl mx-auto">
            Cherished moments from our celebrations
          </p>
        </motion.div>

        <OrnamentalDivider />

        {!hasPhotos ? (
          // Elegant placeholder when no photos are available
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-luxury p-12 text-center">
              {/* Ornamental Photo Icon */}
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-light to-gold rounded-full flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-maroon" />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 w-32 h-32 border-2 border-gold/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-maroon mb-4">
                Gallery Coming Soon
              </h3>
              <p className="font-hindi text-xl text-gold mb-6">
                जल्द ही आ रहा है
              </p>
              
              <div className="space-y-4 text-maroon/70">
                <p className="text-lg">
                  Beautiful moments from our wedding celebrations will be shared here soon.
                </p>
                <p>
                  Photos from the pre-wedding ceremonies, wedding rituals, and reception will be added after the celebrations.
                </p>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center my-8">
                <div className="w-16 h-px bg-gold" />
                <div className="mx-4 w-2 h-2 bg-gold rounded-full" />
                <div className="w-16 h-px bg-gold" />
              </div>

              <p className="text-maroon/60 italic">
                Check back after the wedding to relive the magical moments
              </p>
            </div>
          </motion.div>
        ) : (
          // Gallery grid (will be populated when photos are added)
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Photo cards will be mapped here */}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/events"
            className="inline-block px-10 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-luxury transition-all duration-300 hover:scale-105"
          >
            View Wedding Events
          </a>
        </motion.div>
      </div>
    </div>
  );
}
