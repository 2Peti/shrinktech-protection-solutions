
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productInterest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours with your custom quote.",
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      productInterest: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#090D2F] to-[#0F1340] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5821F]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5821F]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#F5821F]/20 rounded-full text-[#F5821F] text-sm font-medium mb-6">
              💬 Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Request a Quote or Custom Solution
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Get in touch with our experts for customized PVC protection solutions
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 inline-block">
              <p className="text-sm text-gray-300 mb-2">Direct Email Contact:</p>
              <a href="mailto:sales@shrinktech.com" className="text-2xl font-bold text-[#F5821F] hover:text-white transition-colors">
                sales@shrinktech.com
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-white">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent backdrop-blur-sm transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-white">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent backdrop-blur-sm transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-white">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent backdrop-blur-sm transition-all"
                  placeholder="Your company name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="productInterest" className="block text-sm font-semibold text-white">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent backdrop-blur-sm transition-all"
                >
                  <option value="" className="bg-[#090D2F] text-white">Select a product...</option>
                  <option value="STEC-F" className="bg-[#090D2F] text-white">STEC-F Flex Caps</option>
                  <option value="Coatings" className="bg-[#090D2F] text-white">PVC Coatings</option>
                  <option value="Custom Cap" className="bg-[#090D2F] text-white">Custom Cap Solution</option>
                  <option value="Other" className="bg-[#090D2F] text-white">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-white">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your requirements, quantities needed, specifications, etc."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5821F] focus:border-transparent backdrop-blur-sm resize-none transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F5821F] to-[#E5741C] text-white py-4 px-8 rounded-xl hover:from-[#E5741C] hover:to-[#D4661A] transition-all duration-300 font-bold text-lg shadow-lg shadow-[#F5821F]/25 hover:shadow-xl hover:shadow-[#F5821F]/40 hover:-translate-y-1"
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
