import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Client Services', path: '/services' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-red-900/30 via-[#D4AF37]/20 to-red-900/30 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Link to="/mlk-sale" className="flex items-center justify-center space-x-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl">✊🏽</span>
            <p className="text-sm md:text-base text-white font-bold uppercase tracking-wider">
              MLK Day Sale: Custom Website for $149.99 (40% Off) — Ends Jan 31st
            </p>
            <span className="text-[#D4AF37] font-bold hidden sm:inline">→</span>
          </Link>
        </div>
      </div>

      <nav className="sticky top-0 z-50 glass-panel border-b border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Supremus Logo"
                className="h-10 w-10 object-contain brightness-110"
              />
              <span className="text-xl font-heading tracking-wider gold-gradient">Supremus, LLC</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`nav-link text-sm uppercase tracking-widest ${location.pathname === item.path ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/mlk-sale"
                  className="nav-link text-sm uppercase tracking-widest bg-[#D4AF37]/10 border border-[#D4AF37] px-4 py-2 rounded text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all"
                >
                  🔥 MLK Sale
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-[#D4AF37] focus:outline-none"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-panel py-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/mlk-sale"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium bg-[#D4AF37]/10 border border-[#D4AF37] rounded text-[#D4AF37] mb-3"
              >
                🔥 MLK Day Sale - 40% Off!
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#D4AF37]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
