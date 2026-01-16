
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-heading gold-gradient mb-4">Privacy Policy</h1>
          <div className="h-1 w-24 gold-bg"></div>
        </header>

        <div className="glass-panel p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-lg mb-4">General Principles</h2>
            <p>
              At Supremus, LLC, your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information we collect, how we use that information, and the measures we take to safeguard your privacy while using our services and website (supremusllc.biz).
            </p>
          </section>

          <section>
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-lg mb-4">Information Collection and Use</h2>
            <p>
              We collect personal information when you voluntarily provide it through our website, contact forms, or other communication channels. This may include your name, email address, phone number, and any other relevant details necessary for providing our specialized business and digital services.
            </p>
          </section>

          <section>
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-lg mb-4">Use of Information</h2>
            <p>
              The information collected is used to respond to your inquiries, provide you with tailored services, and improve your overall experience with Supremus, LLC. We do not share, sell, or lease your information to third parties unless required by law or with your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-lg mb-4">Security</h2>
            <p>
              We take comprehensive measures to ensure your data is secure. From encryption to strict internal policies, we protect your personal information from unauthorized access, disclosure, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-lg mb-4">Changes to This Policy</h2>
            <p>
              Supremus, LLC reserves the right to update this Privacy Policy as needed. Any changes will be posted on this page, and we encourage you to review our policy regularly.
            </p>
          </section>

          <div className="pt-8 border-t border-white/5">
            <p className="text-sm italic">
              For further questions regarding our Privacy Policy, please contact us at <span className="text-[#D4AF37]">contactus@supremusllc.biz</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
