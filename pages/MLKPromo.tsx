
import React from 'react';
import { Link } from 'react-router-dom';

const MLKPromo: React.FC = () => {
    return (
        <div className="pt-12 pb-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span className="text-6xl">✊🏽</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-heading gold-gradient mb-6 uppercase tracking-wider">
                        Martin Luther King Jr. Day Sale
                    </h1>
                    <p className="text-3xl md:text-4xl text-white font-bold mb-4">
                        Get a Custom Website for Only <span className="gold-gradient">$149.99</span>
                    </p>
                    <p className="text-2xl text-[#D4AF37] mb-8">
                        That's 40% Off!
                    </p>
                    <div className="inline-block px-6 py-3 border-2 border-red-500 bg-red-500/10 rounded">
                        <p className="text-red-400 font-bold text-lg">
                            ⏰ Offer Expires January 31st, 2026
                        </p>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="glass-panel p-8 md:p-12 mb-16 border-l-4 border-[#D4AF37]">
                    <p className="text-xl text-gray-300 leading-relaxed text-center italic">
                        In honor of Dr. King's legacy of empowerment and progress, Supremus LLC is helping entrepreneurs and small business owners establish a strong, professional online presence—at a price you can afford.
                    </p>
                </div>

                {/* What's Included */}
                <div className="mb-16">
                    <h2 className="text-3xl font-heading gold-gradient mb-8 text-center flex items-center justify-center">
                        <span className="text-4xl mr-3">💻</span>
                        What's Included for $149.99
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            'One-Page Custom Website (scrolling style or single-page layout)',
                            'Mobile-Optimized Design',
                            'Contact Form with Email Notifications',
                            'Social Media Integration',
                            'Custom Domain Connection',
                            'Basic SEO Setup',
                            'Hosting Setup Assistance',
                            '1 Round of Revisions'
                        ].map((feature, index) => (
                            <div key={index} className="flex items-start space-x-4 stone-slab p-6 border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mt-1">
                                    <span className="text-[#D4AF37] font-bold text-sm">✓</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Value Proposition */}
                <div className="text-center mb-16 p-8 bg-white/5 border border-white/10 rounded">
                    <p className="text-2xl text-white font-bold mb-4">
                        No templates. No fluff.
                    </p>
                    <p className="text-xl text-gray-400">
                        Just a fast, modern website designed to build trust and convert visitors into customers.
                    </p>
                </div>

                {/* Bonus Section */}
                <div className="glass-panel p-8 md:p-12 mb-16 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                    <div className="text-center">
                        <h3 className="text-3xl font-heading gold-gradient mb-4 flex items-center justify-center">
                            <span className="text-4xl mr-3">🚀</span>
                            BONUS: Get It Done in 5 Business Days or Less
                        </h3>
                        <p className="text-xl text-gray-300 mb-4">
                            You provide the content—we'll handle the rest.
                        </p>
                        <p className="text-lg text-gray-400">
                            Need help with wording or images? We got you.
                        </p>
                    </div>
                </div>

                {/* Urgency Banner */}
                <div className="bg-gradient-to-r from-red-900/20 via-red-800/20 to-red-900/20 border-2 border-red-500/50 p-8 rounded-lg mb-12">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-red-400 mb-3 flex items-center justify-center">
                            <span className="text-4xl mr-3">🕒</span>
                            Hurry! This Offer Ends January 31st, 2026
                        </h3>
                        <p className="text-xl text-gray-300">
                            Limited slots available — secure yours today.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href="https://www.paypal.com/ncp/payment/2NBPP3H6K6VGQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gold-bg text-black px-12 py-5 font-bold uppercase tracking-widest text-lg hover:scale-105 transition-transform text-center min-w-[280px] shadow-lg shadow-[#D4AF37]/20"
                    >
                        👉🏾 Get Started Now
                    </a>
                    <Link
                        to="/contact"
                        className="border-2 border-[#D4AF37] text-[#D4AF37] px-12 py-5 font-bold uppercase tracking-widest text-lg hover:bg-[#D4AF37]/10 transition-all text-center min-w-[280px]"
                    >
                        Book a Free Consult
                    </Link>
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-600 uppercase tracking-widest">
                        Empowering Your Business, Honoring a Legacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MLKPromo;
