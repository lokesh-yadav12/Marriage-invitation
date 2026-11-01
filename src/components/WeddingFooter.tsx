import { Heart, Phone } from 'lucide-react';
import { hostFamily } from '../data/weddingData';

export default function WeddingFooter() {
  return (
    <footer className="bg-maroon text-ivory py-12 border-t-2 border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Wedding Title */}
          <div className="text-center md:text-left">
            <h3 className="font-hindi text-2xl font-bold text-gold mb-2">
              शुभ विवाह
            </h3>
            <p className="text-ivory/80 text-sm">December 2026</p>
          </div>

          {/* Host Family */}
          <div className="text-center">
            <h4 className="font-semibold text-gold-light mb-3">Hosted By</h4>
            <div className="space-y-1 text-sm">
              {hostFamily.hosts.map((host, index) => (
                <p key={index} className="text-ivory/90">{host}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-gold-light mb-3">Contact</h4>
            <div className="space-y-2">
              {hostFamily.contact.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:+91${phone}`}
                  className="flex items-center justify-center md:justify-end space-x-2 text-sm text-ivory/90 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 {phone}</span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-ivory/70">{hostFamily.residence}</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20 text-center">
          <p className="text-sm text-ivory/70 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current text-gold animate-pulse" />
            <span>for the families</span>
          </p>
          <p className="mt-2 text-xs text-ivory/50">
            © Lokesh Yadav
          </p>
        </div>
      </div>
    </footer>
  );
}
