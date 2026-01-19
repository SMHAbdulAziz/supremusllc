
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-5xl font-heading gold-gradient mb-4">Contact Us</h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm">Get In Touch With Us</p>
          <div className="h-1 w-24 gold-bg mt-6"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              At Supremus, LLC, we believe that great partnerships start with a conversation. Whether you're ready to deploy an AI receptionist, build a flagship website, or seek innovative financing solutions, we're here to help.
            </p>

            <div className="space-y-8">
              <ContactInfoItem
                icon="fas fa-map-marker-alt"
                title="Address"
                content="325 N Saint Paul St, Suite 3100, Dallas, TX 75201"
              />
              <ContactInfoItem
                icon="fas fa-phone-alt"
                title="Phone/Fax"
                content="(214) 814-2983"
              />
              <ContactInfoItem
                icon="fas fa-envelope"
                title="Email"
                content="contactus@supremusllc.biz"
              />
              <ContactInfoItem
                icon="fas fa-globe"
                title="Website"
                content="www.supremusllc.biz"
              />
            </div>

            <div className="mt-16 p-8 glass-panel border-l-4 border-[#D4AF37]">
              <h3 className="text-lg font-bold mb-2 gold-gradient">Business Hours</h3>
              <p className="text-gray-400 text-sm">Monday – Friday: 9:00 AM – 6:00 PM CST</p>
              <p className="text-gray-400 text-sm">Saturday & Sunday: Closed</p>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12 relative">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="How can we help your business?"
                ></textarea>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded">
                  <p className="text-green-400 text-sm font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded">
                  <p className="text-red-400 text-sm font-semibold">
                    ✗ {errorMessage}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gold-bg text-black font-bold py-4 uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem: React.FC<{ icon: string, title: string, content: string }> = ({ icon, title, content }) => (
  <div className="flex items-start space-x-6">
    <div className="bg-white/5 w-12 h-12 flex items-center justify-center rounded border border-white/10 text-[#D4AF37]">
      <i className={icon}></i>
    </div>
    <div>
      <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{title}</h4>
      <p className="text-gray-200">{content}</p>
    </div>
  </div>
);

export default Contact;
