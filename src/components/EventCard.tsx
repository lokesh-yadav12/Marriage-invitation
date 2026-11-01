import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import type { WeddingEvent } from '../data/weddingData';

interface EventCardProps {
  event: WeddingEvent;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const eventDate = new Date(event.date);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-white rounded-xl shadow-luxury p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gold/30">
        {/* Event Number Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-lg">
          <span className="font-bold text-maroon text-lg">{index + 1}</span>
        </div>

        {/* Event Name */}
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-bold text-maroon mb-2">
            {event.name}
          </h3>
          <p className="font-hindi text-xl text-gold">
            {event.nameHindi}
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-3 text-maroon/80">
          {/* Date */}
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">{format(eventDate, 'EEEE, MMMM d, yyyy')}</p>
              <p className="text-sm text-maroon/60">{event.day}</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-gold flex-shrink-0" />
            <p className="font-medium">{event.time}</p>
          </div>

          {/* Venue */}
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold">{event.venue}</p>
              <p className="text-sm text-maroon/60">{event.address}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        {event.description && (
          <div className="mt-4 pt-4 border-t border-gold/20">
            <p className="text-maroon/70 italic">{event.description}</p>
          </div>
        )}

        {/* View Location Link */}
        <div className="mt-6">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gold hover:text-gold-light transition-colors group-hover:translate-x-1 duration-300"
          >
            <span className="font-medium">View Location</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="M100 100 L100 50 Q100 0 50 0 L0 0"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gold"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
