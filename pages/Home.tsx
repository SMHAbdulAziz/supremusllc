
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
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
                    src="https://i.ibb.co/6RTPXN1/image.png" 
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
