import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
  isPast: boolean;
}

export default function CountdownTimer({ targetDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    // Target date is already in IST timezone
    const difference = targetDate.getTime() - now.getTime();

    if (difference < 0) {
      const daysSincePassed = Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24)));
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isComplete: daysSincePassed === 0,
        isPast: daysSincePassed > 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isComplete: false,
      isPast: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-maroon to-maroon-dark rounded-2xl shadow-luxury flex items-center justify-center border-2 border-gold/30">
          <AnimatePresence mode="wait">
            <motion.span
              key={value}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gold"
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
        </div>
        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold" />
      </div>
      <span className="mt-4 text-maroon font-semibold text-sm sm:text-base uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );

  if (timeLeft.isPast) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <div className="inline-block bg-gradient-to-r from-gold to-gold-light rounded-2xl px-8 py-6 shadow-luxury">
          <p className="font-hindi text-2xl md:text-3xl text-maroon font-bold mb-2">
            विवाह संपन्न हो गया
          </p>
          <p className="font-serif text-xl text-maroon/80">
            The {eventName} has been celebrated!
          </p>
        </div>
      </motion.div>
    );
  }

  if (timeLeft.isComplete && !timeLeft.isPast) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block bg-gradient-to-r from-gold to-gold-light rounded-2xl px-8 py-6 shadow-luxury"
        >
          <p className="font-hindi text-3xl md:text-4xl text-maroon font-bold mb-2">
            शुभ मुहूर्त
          </p>
          <p className="font-serif text-xl md:text-2xl text-maroon/80">
            The {eventName} begins today!
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-maroon/70 text-sm uppercase tracking-wider mb-2">
          Counting down to
        </p>
        <p className="font-serif text-2xl md:text-3xl font-bold text-maroon">
          {eventName}
        </p>
        <p className="text-maroon/60 mt-2">
          {format(targetDate, 'EEEE, MMMM d, yyyy')}
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-gold text-3xl md:text-5xl font-bold self-start mt-8">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-gold text-3xl md:text-5xl font-bold self-start mt-8">:</span>
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <span className="text-gold text-3xl md:text-5xl font-bold self-start mt-8">:</span>
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
