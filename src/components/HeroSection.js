import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';

function HeroSection() {
  return (
    <motion.div
      className="bg-gradient-to-r from-primary to-secondary text-neutral py-20 px-4 text-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-display mb-4 relative z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Hi, I'm Chun!
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-neutral/90 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 120 }}
        >
          I'm a passionate developer creating intuitive tools and applications.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 150 }}
        >
          <motion.a
            href="https://github.com/Chungus1310"
            target="_blank"
            rel="noopener noreferrer"
          >
              <motion.button
              className="bg-accent hover:bg-cream hover:text-accent text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              View My Work
              </motion.button>
          </motion.a>
          <motion.a 
            href="https://discord.gg/dqspzJPTTu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral hover:bg-cream hover:text-accent text-2xl inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaDiscord />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
