import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaEnvelope } from 'react-icons/fa';

function AboutPage() {
    const skills = [
        { name: 'Python', level: 95 },
        { name: 'Javascript', level: 90 },
        { name: 'C++', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'HTML5', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'AWS', level: 70 },
        { name: 'Netlify', level: 80 },
        { name: 'Render', level: 75 },
        { name: 'Node.js', level: 85 },
        { name: 'Electron.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQLite', level: 70 },
        { name: 'Keras', level: 80 },
        { name: 'Matplotlib', level: 85 },
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 90 },
        { name: 'PyTorch', level: 75 },
        { name: 'TensorFlow', level: 80 },
        { name: 'scikit-learn', level: 85 },
    ];
    return (
        <div className="container mx-auto p-4 relative">
            <motion.h1
                className="text-4xl font-bold mb-8 font-display text-center relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className="bg-gradient-to-r from-primary to-accent-pink text-transparent bg-clip-text">
                    ✨ About Me ✨
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent-pink rounded-full"></div>
            </motion.h1>
            <motion.div
                className="glass-effect rounded-2xl p-8 shadow-lg relative overflow-hidden group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 moving-glass-effect-subtle"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Your Name"
                            className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg transform hover:scale-105 transition-all duration-300 relative z-10"
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-50"></div>
                    </div>
                    <div className="flex-1">
                        <p className="text-text-gray text-lg leading-relaxed mb-6">
                            I'm Chun! I'm a passionate developer focused on creating intuitive tools and applications that make technology more accessible.
                            My projects span machine learning, GUI development, AI integration, and desktop automation.
                            (This is my temporary account; to connect, please join my Discord server as I'm not active on email or GitHub).
                        </p>
                        <div className="flex items-center space-x-6 mb-6">
                            <a
                                href="https://discord.gg/dqspzJPTTu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-pink hover:text-accent-pink text-3xl transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                            >
                                <FaDiscord />
                            </a>
                            <a
                                href="mailto:chungustemp1234@gmail.com"
                                className="text-text-pink hover:text-accent-pink text-3xl transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                        <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-primary to-accent-pink bg-clip-text mt-8 mb-6 font-display">✨ Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skills.map((skill) => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-text-gray font-medium">{skill.name}</span>
                                        <span className="text-text-pink font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-primary/20 rounded-full h-3 relative overflow-hidden shadow-inner">
                                        <motion.div
                                            className="bg-gradient-to-r from-primary to-accent-pink h-full rounded-full relative"
                                            style={{ width: `${skill.level}%` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, type: 'spring', stiffness: 50 }}
                                        >
                                            <div className="absolute inset-0 moving-glass-effect-subtle"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutPage;
