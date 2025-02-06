import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error || 'Failed to send message.'}`);
      }
    } catch (error) {
      setMessage('Error: Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-4xl font-bold mb-8 font-display text-center relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-primary to-accent-pink text-transparent bg-clip-text">
          ✨ Contact Me ✨
        </span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent-pink rounded-full"></div>
      </motion.h1>
      <motion.div
        className="glass-effect rounded-2xl p-8 shadow-lg relative overflow-hidden group max-w-2xl mx-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 moving-glass-effect-subtle"></div>
        </div>
        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="mb-6">
            <label htmlFor="name" className="block text-transparent bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/30 focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-transparent bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/30 focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-transparent bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-sm font-bold mb-2">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/30 focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50 transition-all duration-300"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-transparent bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-sm font-bold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-primary/30 focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/50 transition-all duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`relative w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent-pink text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden`}
          >
            <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'} ✨</span>
            <div className="absolute inset-0 moving-glass-effect"></div>
          </button>
          {message && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-text-pink font-medium"
            >
              {message}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
}

export default ContactPage;
