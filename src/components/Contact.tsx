import { useState } from 'react';
import { MapPin, Phone, Instagram, Youtube, Mail, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="stagger-item text-4xl md:text-5xl font-bold text-white mb-6">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="stagger-item text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start your arm wrestling journey? Contact us today and join 
            the Royal Fighter Dheet Club family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="stagger-item">
            <h3 className="text-2xl font-bold text-white mb-8">
              Visit Our Academy
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">
                    Rohini Sector 20, Pooth Kalan Road<br />
                    Near Shyam Chowk, Delhi
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:9953431834" 
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    +91 9953431834
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:info@royalfighterdheet.com" 
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    info@royalfighterdheet.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/royal_fighter_dheet-club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform magnetic"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://www.instagram.com/mr.teekamchand72"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform magnetic"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://youtu.be/0wvWaNb1vT4?si=HlWpx_pC1QD3PfzM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform magnetic"
                >
                  <Youtube className="text-white" size={24} />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="stagger-item">
              <h4 className="text-white font-semibold mb-4">Find Us</h4>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5234567890123!2d77.1234567!3d28.7234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQzJzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Fighter Dheet Club Location"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/tsAQNC2UpbEXjYaf6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-amber-500 hover:text-amber-400 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="stagger-item">
            <div className="glass p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your interest in arm wrestling training..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 magnetic"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;