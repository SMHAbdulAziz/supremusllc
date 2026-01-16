
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-5xl font-heading gold-gradient mb-4">About the Firm</h1>
          <div className="h-1 w-24 gold-bg"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase tracking-widest flex items-center">
                <span className="w-8 h-[1px] bg-[#D4AF37] mr-4"></span>
                Who We Are
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Supremus, LLC is more than a business consulting firm—we are your trusted partner in navigating the complex world of business formation, finance, and digital growth. As a holding company with expertise across diverse industries, we understand the nuances of building a successful enterprise from the ground up.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase tracking-widest flex items-center">
                <span className="w-8 h-[1px] bg-[#D4AF37] mr-4"></span>
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to deliver innovative, customized solutions that help businesses thrive. From creating solid legal structures such as trusts, LLCs, and corporations to providing cutting-edge digital infrastructure like AI-powered automation, we position our clients for long-term success in an ever-evolving market.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase tracking-widest flex items-center">
                <span className="w-8 h-[1px] bg-[#D4AF37] mr-4"></span>
                What Sets Us Apart
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our strength lies in our commitment to cutting-edge solutions. By leveraging proprietary business structures and advanced technology stacks, we provide access to opportunities that others overlook. At Supremus, LLC, we believe that every challenge is an opportunity, and every opportunity is a step toward achieving greatness.
              </p>
            </div>
          </div>

          <div className="relative">
             <div className="p-4 gold-border border-2 overflow-hidden">
              <img 
                src="https://picsum.photos/id/1/800/1000" 
                alt="Executive Workspace" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel p-8 border-l-4 border-b-4 border-[#D4AF37]">
              <p className="font-heading text-2xl italic">"Forming Foundations. Fueling Growth."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
