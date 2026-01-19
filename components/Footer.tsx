
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logo}
                alt="Supremus Logo"
                className="h-8 w-8 brightness-110 object-contain"
              />
              <span className="text-lg font-heading gold-gradient tracking-wider">Supremus, LLC</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Navigating the complex world of business formation, digital evolution, and growth strategies since inception.
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37]/70 font-semibold mb-6 uppercase tracking-widest text-xs">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-white transition">The Firm</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Inquiries</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Legal Notice</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37]/70 font-semibold mb-6 uppercase tracking-widest text-xs">Digital</h3>
            <p className="text-sm text-gray-400 font-mono mb-2">www.supremusllc.biz</p>
            <p className="text-sm text-gray-500 mb-6">contactus@supremusllc.biz</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Supremus, LLC. Dallas, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
