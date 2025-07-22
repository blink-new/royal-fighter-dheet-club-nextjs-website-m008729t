import { Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Royal Fighter Dheet Club
            </h3>
            <p className="text-gray-400 mb-4">
              Premier arm wrestling academy with 15+ years of excellence in training champions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/royal_fighter_dheet-club"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="text-white" size={20} />
              </a>
              <a
                href="https://youtu.be/0wvWaNb1vT4?si=HlWpx_pC1QD3PfzM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Youtube className="text-white" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Training Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Training</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Beginner Classes</li>
              <li>Advanced Training</li>
              <li>Competition Prep</li>
              <li>Personal Coaching</li>
              <li>Group Sessions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-400 text-sm">
                  Rohini Sector 20, Pooth Kalan Road, Near Shyam Chowk
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-500 flex-shrink-0" size={16} />
                <a 
                  href="tel:9953431834" 
                  className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  +91 9953431834
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-500 flex-shrink-0" size={16} />
                <a 
                  href="mailto:info@royalfighterdheet.com" 
                  className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
                >
                  info@royalfighterdheet.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Royal Fighter Dheet Club. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Coach Teekam Chand</span>
            <a
              href="https://www.instagram.com/mr.teekamchand72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors text-sm"
            >
              @mr.teekamchand72
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;