// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import OrnamentalDivider from '../components/OrnamentalDivider';
// import EventCard from '../components/EventCard';
// import FloralDecoration from '../components/FloralDecoration';
// import { allWeddings } from '../data/weddingData';

// export default function EventsPage() {
//   const [selectedWedding, setSelectedWedding] = useState(0);
//   const wedding = allWeddings[selectedWedding];

//   return (
//     <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-4">
//             Wedding Events
//           </h1>
//           <h2 className="font-hindi text-3xl md:text-4xl text-gold mb-6">
//             विवाह कार्यक्रम
//           </h2>
//           <p className="text-maroon/70 text-lg max-w-2xl mx-auto">
//             Join us in celebrating these beautiful moments as two hearts unite in sacred matrimony
//           </p>
//         </motion.div>

//         <OrnamentalDivider />

//         {/* Wedding Selector Tabs */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex justify-center mb-12"
//         >
//           <div className="inline-flex bg-white rounded-full shadow-luxury p-2">
//             <button
//               onClick={() => setSelectedWedding(0)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 selectedWedding === 0
//                   ? 'bg-gradient-to-r from-gold to-gold-light text-maroon shadow-md'
//                   : 'text-maroon/60 hover:text-maroon'
//               }`}
//             >
//               <span className="hidden sm:inline">Ekta & Vikas</span>
//               <span className="sm:hidden">Wedding 1</span>
//             </button>
//             <button
//               onClick={() => setSelectedWedding(1)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                 selectedWedding === 1
//                   ? 'bg-gradient-to-r from-gold to-gold-light text-maroon shadow-md'
//                   : 'text-maroon/60 hover:text-maroon'
//               }`}
//             >
//               <span className="hidden sm:inline">Bijendra & Priyanka</span>
//               <span className="sm:hidden">Wedding 2</span>
//             </button>
//           </div>
//         </motion.div>

//         {/* Couple Names Display */}
//         <motion.div
//           key={selectedWedding}
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12 relative"
//         >
//           <div className="relative bg-white rounded-2xl shadow-luxury p-8 max-w-3xl mx-auto overflow-hidden">
//             <FloralDecoration position="top-left" className="opacity-10" />
//             <FloralDecoration position="bottom-right" className="opacity-10" />
            
//             <div className="relative z-10">
//               <h3 className="font-serif text-3xl font-bold text-maroon mb-3">
//                 {wedding.couple.bride.name} <span className="text-gold">&</span> {wedding.couple.groom.name}
//               </h3>
//               <p className="font-hindi text-xl text-gold">
//                 {wedding.couple.bride.nameHindi} <span className="text-maroon">&</span> {wedding.couple.groom.nameHindi}
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Events Timeline */}
//         <div className="relative">
//           {/* Timeline Line - Desktop only */}
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-light to-gold transform -translate-x-1/2" />

//           {/* Events Grid */}
//           <div className="space-y-8 md:space-y-12">
//             {wedding.events.map((event, index) => (
//               <div
//                 key={`${event.name}-${index}`}
//                 className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
//                   index % 2 === 0 ? '' : 'md:flex-row-reverse'
//                 }`}
//               >
//                 {index % 2 === 0 ? (
//                   <>
//                     <div className="md:text-right">
//                       <EventCard event={event} index={index} />
//                     </div>
//                     <div className="hidden md:block" />
//                   </>
//                 ) : (
//                   <>
//                     <div className="hidden md:block" />
//                     <div>
//                       <EventCard event={event} index={index} />
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-center mt-16"
//         >
//           <div className="bg-gradient-to-r from-maroon via-maroon-dark to-maroon rounded-2xl shadow-luxury p-8 md:p-12 max-w-3xl mx-auto">
//             <p className="font-hindi text-2xl text-gold-light mb-4">
//               आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी
//             </p>
//             <p className="text-ivory/90 text-lg mb-6">
//               Your presence will be a blessing for us and our families
//             </p>
//             <a
//               href="/rsvp"
//               className="inline-block px-10 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
//             >
//               Confirm Your Presence
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import { useState } from 'react';
import OrnamentalDivider from '../components/OrnamentalDivider';
import EventCard from '../components/EventCard';
import FloralDecoration from '../components/FloralDecoration';
import { allWeddings } from '../data/weddingData';

export default function EventsPage() {
  const [selectedWedding, setSelectedWedding] = useState(0);
  const wedding = allWeddings[selectedWedding];

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
            Wedding Events
          </h1>
          <h2 className="font-hindi text-3xl md:text-4xl text-gold mb-6">
            विवाह कार्यक्रम
          </h2>
          <p className="text-maroon/70 text-lg max-w-2xl mx-auto">
            Join us in celebrating these beautiful moments as two hearts unite in sacred matrimony
          </p>
        </motion.div>

        <OrnamentalDivider />

        {/* Wedding Selector Tabs */}
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
              <span className="hidden sm:inline">Ekta & Vikas</span>
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

        {/* Couple Names Display */}
        <motion.div
          key={selectedWedding}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <div className="relative bg-white rounded-2xl shadow-luxury p-8 max-w-3xl mx-auto overflow-hidden">
            <FloralDecoration position="top-left" className="opacity-10" />
            <FloralDecoration position="bottom-right" className="opacity-10" />
            
            <div className="relative z-10">
              {selectedWedding === 1 ? (
                <>
                  {/* Wedding 2: Groom first, then Bride */}
                  <h3 className="font-serif text-3xl font-bold text-maroon mb-3">
                    {wedding.couple.groom.name} <span className="text-gold">&</span> {wedding.couple.bride.name}
                  </h3>
                  <p className="font-hindi text-xl text-gold">
                    {wedding.couple.groom.nameHindi} <span className="text-maroon">&</span> {wedding.couple.bride.nameHindi}
                  </p>
                </>
              ) : (
                <>
                  {/* Wedding 1: Bride first, then Groom (unchanged) */}
                  <h3 className="font-serif text-3xl font-bold text-maroon mb-3">
                    {wedding.couple.bride.name} <span className="text-gold">&</span> {wedding.couple.groom.name}
                  </h3>
                  <p className="font-hindi text-xl text-gold">
                    {wedding.couple.bride.nameHindi} <span className="text-maroon">&</span> {wedding.couple.groom.nameHindi}
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Events Timeline */}
        <div className="relative">
          {/* Timeline Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-light to-gold transform -translate-x-1/2" />

          {/* Events Grid */}
          <div className="space-y-8 md:space-y-12">
            {wedding.events.map((event, index) => (
              <div
                key={`${event.name}-${index}`}
                className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right">
                      <EventCard event={event} index={index} />
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div>
                      <EventCard event={event} index={index} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-maroon via-maroon-dark to-maroon rounded-2xl shadow-luxury p-8 md:p-12 max-w-3xl mx-auto">
            <p className="font-hindi text-2xl text-gold-light mb-4">
              आपकी उपस्थिति हमारे लिए सौभाग्य की बात होगी
            </p>
            <p className="text-ivory/90 text-lg mb-6">
              Your presence will be a blessing for us and our families
            </p>
            <a
              href="/rsvp"
              className="inline-block px-10 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Confirm Your Presence
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}