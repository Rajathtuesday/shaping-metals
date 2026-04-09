import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1E2A38] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#C9A45C]">
              SHAPING METALS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting bespoke metal art and architectural fabrications with precision and artistry.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#C9A45C]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      onNavigate(item.toLowerCase());
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-[#C9A45C] transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#C9A45C]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91 6362843722</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@shapingmetals.com</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>220/15/1, 5th Cross Rd, 8th Main, 2nd Block, Jaya Nagar East, Jayanagar, Bengaluru, Karnataka 560011</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#C9A45C]">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A45C] flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A45C] flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A45C] flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shaping Metals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
