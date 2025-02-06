import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';
import Snowfall from './components/Snowfall';
import Bubbles from './components/Bubbles';
import './index.css';
import './styles/nav.css';

// Lazy load route components
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const ProjectDetailPage = lazy(() => import('./components/ProjectDetailPage'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="relative p-8 glass-effect rounded-2xl">
      <div className="absolute inset-0 moving-glass-effect-subtle rounded-2xl"></div>
      <div className="relative z-10 flex items-center gap-4">
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent-pink animate-bounce"></div>
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent-pink animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent-pink animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [snowfallEnabled, setSnowfallEnabled] = useState(true);

  return (
    <>
      <Bubbles />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen pattern-bg relative overflow-hidden">
          {/* Background animations */}
          <div className="fixed inset-0 pointer-events-none z-50">
            <Snowfall isEnabled={snowfallEnabled} />
          </div>
          
          <nav className="glass-effect shadow-glow z-40 relative border-b-2 border-glass-light">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <Link to="/" className="site-title text-2xl font-display flex items-center gap-2 transition-all duration-300 hover:scale-105 text-shadow-lg">
                <span className="text-3xl">✨</span>
                Chun's Portfolio
                <span className="text-3xl">✨</span>
              </Link>
              <div className="flex space-x-8 items-center">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <button
                  onClick={() => setSnowfallEnabled(!snowfallEnabled)}
                  className="nav-button flex items-center gap-2"
                >
                  <span className="relative z-10">
                    {snowfallEnabled ? '❄️ Disable Snow' : '✨ Enable Snow'}
                  </span>
                </button>
              </div>
            </div>
          </nav>
          
          <div className="container mx-auto px-4 py-8">
            <div className="glass-effect rounded-2xl shadow-glass p-6 mb-8">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<ProjectsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </div>
          </div>

          <footer className="glass-effect shadow-glow mt-12 relative z-10 border-t-2 border-glass-light">
            <div className="container mx-auto text-center py-4">
              <div className="flex justify-center space-x-4 mb-2">
                <a href="https://github.com/Chungus1310" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-100 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12">
                  <FaGithub />
                </a>
                <a href="https://discord.gg/dqspzJPTTu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-100 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12">
                  <FaDiscord />
                </a>
                <a href="mailto:chungustemp1234@gmail.com" className="text-white hover:text-pink-100 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12">
                  <FaEnvelope />
                </a>
              </div>
              <p className="text-body">© {new Date().getFullYear()} Chun. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
