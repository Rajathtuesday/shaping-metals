import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';
import contactHero from '../assets/images/gates/gate11.jpg';
<link rel="icon" type="image/png" href="/logo.png" />

import { useSEO } from '../hooks/useSEO';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  useSEO({
    title: "Contact Us for Your Project",
    description: "Get in touch with Shaping Metals for bespoke metal fabrication inquiries. We handle projects across South India and beyond."
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={contactHero}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-serif font-bold mb-4">
            Let's <span className="text-[#C9A45C]">Connect</span>
          </h1>
          <p className="text-xl text-gray-200">
            We're excited to hear about your project and explore how we can help
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E2A38] mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to discuss your metalwork project? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A45C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2A38] mb-1">Phone</h3>
                    <p className="text-gray-600">+91 6362843722</p>
                    <p className="text-sm text-gray-500">Mon-Sat 9am-7pm IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A45C] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2A38] mb-1">Email</h3>
                    <p className="text-gray-600">info@shapingmetals.com</p>
                    <p className="text-gray-600">projects@shapingmetals.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C9A45C] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E2A38] mb-1">220/15/1, 5th Cross Rd, 8th Main,</h3>
                    <p className="text-gray-600">2nd Block, Jaya Nagar East, Jayanagar,</p>
                    <p className="text-gray-600">Bengaluru, Karnataka 560011</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E2A38] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/shapingmetals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#ECEDEF] hover:bg-[#C9A45C] flex items-center justify-center transition-colors group"
                  >
                    <Instagram className="text-[#1E2A38] group-hover:text-white transition-colors" size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581741280432"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#ECEDEF] hover:bg-[#C9A45C] flex items-center justify-center transition-colors group"
                  >
                    <Facebook className="text-[#1E2A38] group-hover:text-white transition-colors" size={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCM_deZu5zZvK5GVa2mThI0w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#ECEDEF] hover:bg-[#C9A45C] flex items-center justify-center transition-colors group"
                  >
                    <Youtube className="text-[#1E2A38] group-hover:text-white transition-colors" size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="sculpture">Metal Sculpture</option>
                    <option value="architectural">Architectural Elements</option>
                    <option value="mural">Wall Mural</option>
                    <option value="gates">Gates & Railings</option>
                    <option value="grills">Security Grills</option>
                    <option value="custom">Custom Fabrication</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1E2A38] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C] outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                    Thank you for your inquiry! We'll be in touch shortly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A45C] hover:bg-[#B8934B] text-white py-4 text-sm font-semibold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4779565346466!2d77.5829493!3d12.941239000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a68d3dd1bd%3A0xa248755fdd689c6e!2sShaping%20Metals!5e0!3m2!1sen!2sin!4v1782552296736!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Shaping Metals Location"
        />
      </section>
    </div>
  );
}
