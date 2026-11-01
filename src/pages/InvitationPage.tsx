import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloralDecoration from '../components/FloralDecoration';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { blessings, hostFamily } from '../data/weddingData';

export default function InvitationPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Digital Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Ornamental Border */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-4 border-2 border-gold/40 rounded-xl" />
            <div className="absolute inset-6 border border-gold/20 rounded-lg" />
          </div>

          {/* Floral Decorations */}
          <FloralDecoration position="top-left" className="opacity-30" />
          <FloralDecoration position="top-right" className="opacity-30" />
          <FloralDecoration position="bottom-left" className="opacity-30" />
          <FloralDecoration position="bottom-right" className="opacity-30" />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 space-y-8">
            {/* Ganesh Symbol */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="currentColor" className="text-gold/20" />
                  <text
                    x="50"
                    y="65"
                    fontSize="40"
                    textAnchor="middle"
                    fill="currentColor"
                    className="text-gold font-hindi"
                  >
                    ॐ
                  </text>
                </svg>
              </div>
            </motion.div>

            {/* Sanskrit Blessing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center space-y-3"
            >
              <p className="font-hindi text-2xl md:text-3xl text-gold font-semibold">
                {blessings.sanskrit}
              </p>
              <div className="max-w-2xl mx-auto space-y-1">
                <p className="font-hindi text-base md:text-lg text-maroon/80 leading-relaxed">
                  {blessings.verse1}
                </p>
                <p className="font-hindi text-base md:text-lg text-maroon/80 leading-relaxed">
                  {blessings.verse2}
                </p>
              </div>
            </motion.div>

            <OrnamentalDivider />

            {/* Main Invitation Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center space-y-4"
            >
              <p className="font-hindi text-xl md:text-2xl text-maroon leading-relaxed">
                {blessings.message}
              </p>
              <p className="font-serif text-lg md:text-xl text-maroon/80 italic">
                Together with our families, we joyfully invite you to
              </p>
            </motion.div>

            {/* Wedding Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center space-y-3"
            >
              <h1 className="font-hindi text-4xl md:text-5xl font-bold gradient-text">
                शुभ विवाह
              </h1>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
                Sacred Wedding Celebration
              </h2>
            </motion.div>

            <OrnamentalDivider />

            {/* Host Family Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-center space-y-6"
            >
              <div>
                <p className="text-maroon/70 text-sm uppercase tracking-wider mb-3">
                  Invitation Presented By
                </p>
                <p className="font-serif text-xl md:text-2xl font-semibold text-gold">
                  {hostFamily.invitation.organizer}
                </p>
                <p className="font-hindi text-lg text-gold/80 mt-1">
                  {hostFamily.invitation.organizerHindi}
                </p>
              </div>

              <div className="pt-6 border-t border-gold/20">
                <p className="text-maroon/70 text-sm uppercase tracking-wider mb-3">
                  Hosted By
                </p>
                <div className="space-y-2">
                  {hostFamily.hosts.map((host, index) => (
                    <div key={index}>
                      <p className="font-serif text-lg text-maroon font-medium">
                        {host}
                      </p>
                      <p className="font-hindi text-base text-gold/80">
                        {hostFamily.hostsHindi[index]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <p className="text-maroon/70 text-sm mb-2">Residence</p>
                <p className="font-serif text-base text-maroon">
                  {hostFamily.residence}
                </p>
              </div>

              <div className="pt-6 border-t border-gold/20">
                <p className="text-maroon/70 text-sm mb-2">Contact</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {hostFamily.contact.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:+91${phone}`}
                      className="font-mono text-maroon hover:text-gold transition-colors"
                    >
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <OrnamentalDivider />

            {/* Closing Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center space-y-4"
            >
              <p className="font-hindi text-xl md:text-2xl text-gold">
                आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी
              </p>
              <p className="font-serif text-lg text-maroon/80 italic">
                Your presence will be our greatest blessing
              </p>
            </motion.div>

            {/* Date and Venue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center pt-8 border-t border-gold/20 space-y-2"
            >
              <p className="font-serif text-2xl font-bold text-maroon">
                December 2026
              </p>
              <p className="text-maroon/70">
                Gunti, Behror, Behror-Kotputli, Rajasthan
              </p>
            </motion.div>
          </div>

          {/* Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L50 50 L0 100 M50 0 L100 50 L50 100' stroke='%23C8A45D' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '50px 50px',
            }}
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Link
            to="/events"
            className="px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-luxury transition-all duration-300 hover:scale-105 text-center"
          >
            View All Events
          </Link>
          <Link
            to="/rsvp"
            className="px-8 py-3 bg-maroon text-gold border-2 border-gold font-semibold rounded-full hover:bg-maroon-dark transition-all duration-300 hover:scale-105 text-center"
          >
            Confirm Your Presence
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
