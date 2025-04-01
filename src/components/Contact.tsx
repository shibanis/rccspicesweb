"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="text-white/80 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium text-white">Get in Touch</h3>
          <p>Email: contact@rccspices.com</p>
          <p>Phone: +1 234 567 8900</p>
          <p>Address: 123 Spice Street, Kerala, India</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-white/40 transition-colors"
              required
            />
          </div>
          <div>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 bg-white/10 border border-white/20 rounded focus:outline-none focus:border-white/40 transition-colors"
              required
            />
          </div>
          <div>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 bg-white/10 border border-white/20 rounded h-32 focus:outline-none focus:border-white/40 transition-colors resize-none"
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-2 px-4 rounded transition-all duration-300 
              ${status === 'loading' 
                ? 'bg-white/20 cursor-not-allowed' 
                : 'bg-white/10 hover:bg-white/20'}`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Status Messages */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 text-center mt-2"
            >
              Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-center mt-2"
            >
              Failed to send message. Please try again.
            </motion.p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact; 