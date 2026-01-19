import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Home: React.FC = () => {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Show promo after 1 second delay
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Promotional Overlay */}
      {showPromo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-2xl mx-4 bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] border-4 border-[#D4AF37] rounded-lg shadow-2xl shadow-[#D4AF37]/50 animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={() => setShowPromo(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-[#D4AF37] text-black rounded-full font-bold text-xl hover:bg-[#B8941F] transition-all shadow-lg z-10"
            >
              ×
            </button>

            {/* Flashing Border Effect */}
            <div className="absolute inset-0 rounded-lg border-4 border-[#D4AF37] animate-pulse pointer-events-none"></div>

            <div className="p-8 md:p-12 text-center">
              {/* Icon */}
              <div className="text-6xl mb-4 animate-bounce">✊🏽</div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-heading gold-gradient mb-4 uppercase tracking-wider">
                MLK Day Special!
              </h2>

              {/* Offer */}
              <div className="mb-6">
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                  $149<span className="text-3xl">.99</span>
                </p>
                <p className="text-2xl text-red-400 font-bold mb-2">
                  40% OFF Custom Website!
                </p>
                <p className="text-lg text-gray-400">
                  Professional One-Page Website • Mobile Optimized • SEO Ready
                </p>
              </div>

              {/* Urgency */}
              <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 mb-6 animate-pulse">
                <p className="text-red-400 font-bold text-lg">
                  ⏰ Limited Time: Ends January 31st, 2026
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/mlk-sale"
                  onClick={() => setShowPromo(false)}
                  className="gold-bg text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg"
                >
                  🎯 View Full Details
                </Link>
                <button
                  onClick={() => setShowPromo(false)}
                  className="border-2 border-gray-600 text-gray-400 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
                >
                  Maybe Later
                </button>
              </div>

              {/* Footer */}
              <p className="mt-6 text-xs text-gray-600 italic">
                Honoring Dr. King's Legacy of Empowerment
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="ambient-glow -top-20 -left-20"></div>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight uppercase mb-6">
                <span className="block text-white">Your Strategic</span>
                <span className="block gold-gradient">Partner</span>
                <span className="block text-white">In Business Success</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                At Supremus, LLC, we transform visions into reality through tailored strategies and cutting-edge digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/services" className="gold-bg text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all text-center">
                  Explore Services
                </Link>
                <Link to="/contact" className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37]/10 transition-all text-center">
                  Contact Us
                </Link>
              </div>
              <p className="mt-8 text-sm text-gray-600 font-mono tracking-tighter">
                www.supremusllc.biz
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="ambient-glow top-0 right-0"></div>
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -right-10 w-32 h-32 border-t-2 border-r-2 border-[#D4AF37]/30"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border-b-2 border-l-2 border-[#D4AF37]/30"></div>

                <div className="p-4 bg-[#1C1C1C] border border-white/5 shadow-2xl">
                  <img
                    src={logo}
                    alt="Supremus Lion"
                    className="w-full h-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction with Stone Slab UI */}
      <section className="py-24 stone-slab border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading mb-8 gold-gradient">Forming Foundations. Fueling Growth.</h2>
          <p className="text-lg text-gray-400 leading-loose">
            Specializing in the formation of trusts, LLCs, and corporations, and pioneering proprietary digital solutions like AI-powered receptionists and high-converting websites. We offer tailored strategies to turn your vision into reality. Whether you're seeking to protect your assets or scale your operations through technology, our expertise ensures you're equipped for sustained success.
          </p>
        </div>
      </section>

      {/* Mini Services Highlights */}
      <section className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="fas fa-robot"
              title="AI Receptionists"
              desc="Deploy custom AI agents that handle inquiries, book appointments, and capture leads 24/7."
            />
            <ServiceCard
              icon="fas fa-code"
              title="Website Building"
              desc="Next-generation, high-performance websites built to convert visitors into loyal clients."
            />
            <ServiceCard
              icon="fas fa-building"
              title="Business Formation"
              desc="Professional formation of LLCs, Trusts, and Corporations with strategic asset protection."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: string, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="glass-panel p-8 group hover:translate-y-[-4px] transition-all duration-300">
    <div className="text-4xl text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Home;
