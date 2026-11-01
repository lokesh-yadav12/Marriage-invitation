import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, User, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import OrnamentalDivider from '../components/OrnamentalDivider';
import FloralDecoration from '../components/FloralDecoration';

export default function RSVPPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    wedding: '',
    attendance: '',
    dietary: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.wedding) {
      newErrors.wedding = 'Please select which wedding you will attend';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please confirm your attendance';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Note: This is UI only. Backend integration needed for actual submission
    console.log('RSVP Form Data:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        wedding: '',
        attendance: '',
        dietary: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4"
        >
          <div className="bg-white rounded-2xl shadow-luxury p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="w-12 h-12 text-maroon" />
            </motion.div>

            <h2 className="font-serif text-3xl font-bold text-maroon mb-4">
              Thank You!
            </h2>
            <p className="font-hindi text-2xl text-gold mb-6">
              धन्यवाद!
            </p>

            <p className="text-maroon/80 text-lg mb-4">
              Your response has been received.
            </p>
            <p className="text-maroon/60">
              We look forward to celebrating with you!
            </p>

            <div className="mt-8">
              <a
                href="/"
                className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-maroon font-semibold rounded-full hover:shadow-luxury transition-all duration-300 hover:scale-105"
              >
                Return to Home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-ivory via-ivory-warm to-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mb-4">
            RSVP
          </h1>
          <h2 className="font-hindi text-3xl md:text-4xl text-gold mb-6">
            उपस्थिति की पुष्टि करें
          </h2>
          <p className="text-maroon/70 text-lg max-w-2xl mx-auto">
            Please confirm your attendance so we can prepare for your arrival
          </p>
        </motion.div>

        <OrnamentalDivider />

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-white rounded-2xl shadow-luxury p-8 md:p-12 overflow-hidden"
        >
          <FloralDecoration position="top-left" className="opacity-10" />
          <FloralDecoration position="bottom-right" className="opacity-10" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <User className="w-5 h-5 text-gold" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold transition-colors ${
                  errors.name ? 'border-red-500' : 'border-maroon/20'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <Phone className="w-5 h-5 text-gold" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-maroon/20'
                }`}
                placeholder="+91 XXXXX XXXXX"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <Mail className="w-5 h-5 text-gold" />
                <span>Email (Optional)</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-maroon/20 rounded-lg focus:outline-none focus:border-gold transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label htmlFor="guests" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <Users className="w-5 h-5 text-gold" />
                <span>Number of Guests</span>
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-maroon/20 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            {/* Which Wedding */}
            <div>
              <label htmlFor="wedding" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <span>Which Wedding Will You Attend? *</span>
              </label>
              <select
                id="wedding"
                name="wedding"
                value={formData.wedding}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white ${
                  errors.wedding ? 'border-red-500' : 'border-maroon/20'
                }`}
              >
                <option value="">Select wedding</option>
                <option value="wedding1"> Ekta & Vikas (Dec 1-2, 2026)</option>
                <option value="wedding2"> Bijendra &   Priyanka(Dec 2-4, 2026)</option>
                <option value="both">Both Weddings</option>
              </select>
              {errors.wedding && <p className="mt-1 text-sm text-red-500">{errors.wedding}</p>}
            </div>

            {/* Attendance Confirmation */}
            <div>
              <label htmlFor="attendance" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <span>Will You Attend? *</span>
              </label>
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-gold transition-colors bg-white ${
                  errors.attendance ? 'border-red-500' : 'border-maroon/20'
                }`}
              >
                <option value="">Select your response</option>
                <option value="yes">Yes, I will attend</option>
                <option value="no">Sorry, I cannot attend</option>
                <option value="maybe">Not sure yet</option>
              </select>
              {errors.attendance && <p className="mt-1 text-sm text-red-500">{errors.attendance}</p>}
            </div>

            {/* Dietary Preferences */}
            <div>
              <label htmlFor="dietary" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <span>Dietary Preferences (Optional)</span>
              </label>
              <input
                type="text"
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-maroon/20 rounded-lg focus:outline-none focus:border-gold transition-colors"
                placeholder="E.g., Vegetarian, No onion/garlic, etc."
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center space-x-2 text-maroon font-semibold mb-2">
                <MessageSquare className="w-5 h-5 text-gold" />
                <span>Message to the Family (Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-maroon/20 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Share your wishes and blessings..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-maroon font-bold text-lg rounded-full hover:shadow-luxury transition-all duration-300 hover:scale-[1.02]"
              >
                Confirm Your Presence
              </button>
            </div>

            {/* Note */}
            <p className="text-center text-sm text-maroon/60 italic">
              * Required fields
            </p>
          </form>
        </motion.div>

        {/* Information Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 bg-maroon/5 rounded-xl p-6 text-center border-2 border-gold/20"
        >
          <p className="text-maroon/70 text-sm">
            <strong>Note:</strong> This form demonstrates the RSVP interface. To enable actual response submission, 
            please configure a backend service or form handler (such as Formspree, Google Forms API, or a custom backend).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
