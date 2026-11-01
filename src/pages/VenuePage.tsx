import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { allWeddings } from '../data/weddingData';

export default function VenuePage() {
  const [copied, setCopied] = useState(false);
  const venue = allWeddings[0].venues.main;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venue.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Venue & Directions
          </h1>
          <h2 className="font-hindi text-3xl md:text-4xl text-gold mb-6">
            स्थान एवं दिशा
          </h2>
          <p className="text-maroon/70 text-lg max-w-2xl mx-auto">
            Find your way to our celebration
          </p>
        </motion.div>

        <OrnamentalDivider />

        {/* Main Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-luxury overflow-hidden mb-8"
        >
          {/* Map Preview */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-maroon to-maroon-dark">
            <iframe
              title="Wedding Venue Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venue.address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Venue Details */}
          <div className="p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-maroon" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-maroon mb-2">
                  {venue.name}
                </h3>
                <p className="text-maroon/70 text-lg leading-relaxed">
                  {venue.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Get Directions Button */}
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-luxury transition-all duration-300 hover:scale-105"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </a>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-maroon text-gold border-2 border-gold font-semibold rounded-full hover:bg-maroon-dark transition-all duration-300 hover:scale-105"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Travel Information */}
          <div className="bg-white rounded-xl shadow-luxury p-6 md:p-8">
            <h3 className="font-serif text-xl font-bold text-maroon mb-4">
              Travel Information
            </h3>
            <div className="space-y-3 text-maroon/80">
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>The venue is located in Gunti village, Behror tehsil, kotputli-behror district, Rajasthan</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Nearest major city: Behror (approximately 5-7 km)</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Well-connected by road from major cities in Rajasthan</span>
              </p>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-xl shadow-luxury p-6 md:p-8">
            <h3 className="font-serif text-xl font-bold text-maroon mb-4">
              Accommodation
            </h3>
            <div className="space-y-3 text-maroon/80">
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Accommodations are available at host family.</span>
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>For accommodation assistance, please contact the host family</span>
              </p>
              {/* <p className="flex items-start">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Early booking is recommended during the wedding season</span>
              </p> */}
            </div>
          </div>
        </motion.div>

        {/* Contact for Directions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-maroon via-maroon-dark to-maroon rounded-2xl shadow-luxury p-8 text-center"
        >
          <p className="text-ivory/90 text-lg mb-4">
            Need help finding the venue?
          </p>
          <p className="font-hindi text-xl text-gold-light mb-6">
            कृपया हमसे संपर्क करें
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917742657900"
              className="px-6 py-2 bg-gold text-maroon font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              +91 7742657900
            </a>
            <a
              href="tel:+919928518944"
              className="px-6 py-2 bg-gold text-maroon font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              +91 9928518944
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
