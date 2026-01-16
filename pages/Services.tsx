
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'ai-receptionist',
      title: 'AI Receptionist Creation',
      icon: 'fas fa-headset',
      desc: 'Revolutionize your customer engagement with bespoke AI voice and chat receptionists. Our agents handle inquiries, book appointments, and process information just like a human, but with 24/7 availability.',
      features: ['Multi-lingual support', 'Direct CRM integration', 'Intelligent appointment booking', 'Natural voice synthesis']
    },
    {
      id: 'web-building',
      title: 'Premium Website Building',
      icon: 'fas fa-laptop-code',
      desc: 'A website is your digital storefront. We build high-performance, SEO-optimized, and aesthetically stunning web applications that serve as powerful conversion engines for your business.',
      features: ['Responsive mobile-first design', 'High-speed performance', 'Conversion rate optimization', 'Custom interactive features']
    },
    {
      id: 'business-formation',
      title: 'Business Formation & Structuring',
      icon: 'fas fa-sitemap',
      desc: 'From LLCs and corporations to specialized trusts, we assist in forming the right legal structures to ensure your assets are safeguarded and your business is positioned for maximum growth.',
      features: ['Trust formation', 'Asset protection strategies', 'Corporate compliance', 'Scalable entity structures']
    },
    {
      id: 'strategic-consulting',
      title: 'Strategic Business Consulting',
      icon: 'fas fa-lightbulb',
      desc: 'We craft actionable strategies designed to drive profitability, streamline operations, and enhance long-term sustainability for your modern enterprise.',
      features: ['Operational efficiency', 'Revenue diversification', 'Capital raising strategies', 'Market positioning']
    }
  ];

  return (
    <div className="pt-12 pb-24 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-heading gold-gradient mb-4">Client Services</h1>
          <p className="text-gray-500 max-w-2xl mx-auto uppercase tracking-widest text-sm">Tailored Solutions. Unmatched Expertise.</p>
          <div className="h-1 w-24 gold-bg mx-auto mt-6 opacity-60"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div key={service.id} className="stone-slab p-10 flex flex-col h-full border border-white/5 hover:bg-[#222222] transition-all group">
              <div className="text-4xl text-[#D4AF37] mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-white">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{service.desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center uppercase tracking-tighter">
                    <span className="text-[#D4AF37]/50 mr-2">/</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-panel p-12 text-center relative border border-white/5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] gold-bg opacity-50"></div>
          <h2 className="text-3xl font-heading gold-gradient mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Our services are fully customizable to fit your unique objectives. Contact us today to discover how we can help you turn your vision into reality.
          </p>
          <Link to="/contact" className="inline-block gold-bg text-black px-12 py-4 font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all">
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
