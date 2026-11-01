import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';
import OrnamentalDivider from '../components/OrnamentalDivider';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Gallery photos - add more images to this array
  const photos = [
    {
      id: 1,
      src: '/src/data/pic1.jpg',
      alt: 'Wedding celebration moment 1',
      title: 'Beautiful Memories',
    },
     {
      id: 2,
      src: '/src/data/pic1.jpg',
      alt: 'Wedding celebration moment 1',
      title: 'Beautiful Memories',
    },
     {
      id: 3,
      src: '/src/data/pic1.jpg',
      alt: 'Wedding celebration moment 1',
      title: 'Beautiful Memories',
    },
    // Add more photos here as you upload them
  ];

  const hasPhotos = photos.length > 0;

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

        {hasPhotos ? (
          <>
            {/* Gallery grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-luxury cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-ivory font-semibold">{photo.title}</p>
                    </div>
                  </div>
                  {/* Gold border on hover */}
                  <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              ))}
            </motion.div>

            {/* Lightbox */}
            {selectedImage !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-maroon-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-gold rounded-full hover:bg-gold-light transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-maroon" />
                </button>
                
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  src={photos[selectedImage].src}
                  alt={photos[selectedImage].alt}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation */}
                {photos.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {photos.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === selectedImage ? 'bg-gold w-8' : 'bg-ivory/50'
                        }`}
                        aria-label={`View photo ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </>
        ) : (
          // Placeholder when no photos
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-luxury p-12 text-center">
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gold-light to-gold rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
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
