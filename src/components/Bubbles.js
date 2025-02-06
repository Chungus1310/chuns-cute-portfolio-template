import React, { useEffect, useRef } from 'react';
import './Bubbles.css';

const Bubbles = () => {
  const containerRef = useRef(null);
  const bubbles = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const createBubble = (e) => {
      if (!containerRef.current) return;

      // Update mouse position
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Create new bubble element
      const bubble = document.createElement('div');
      bubble.className = 'bubble';

      // Random size between 10px and 30px
      const size = Math.random() * 20 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Position bubble near cursor
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      bubble.style.left = `${mousePos.current.x + offsetX}px`;
      bubble.style.top = `${mousePos.current.y + offsetY}px`;

      // Random movement direction
      const moveX = (Math.random() - 0.5) * 100;
      const moveY = -100 - Math.random() * 100; // Always move upward
      bubble.style.setProperty('--move-x', `${moveX}px`);
      bubble.style.setProperty('--move-y', `${moveY}px`);

      // Add to container and track in ref
      containerRef.current.appendChild(bubble);
      bubbles.current.push(bubble);

      // Remove bubble after animation
      setTimeout(() => {
        if (containerRef.current && containerRef.current.contains(bubble)) {
          containerRef.current.removeChild(bubble);
          bubbles.current = bubbles.current.filter(b => b !== bubble);
        }
      }, 4000);
    };

    const createBubbleThrottled = (e) => {  // Changed 'event' to 'e' as parameter
      if (Math.random() < 0.3) { // 30% chance to create bubble on each move
        createBubble(e);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', createBubbleThrottled);

    return () => {
      document.removeEventListener('mousemove', createBubbleThrottled);
      // Clean up any remaining bubbles
      bubbles.current.forEach(bubble => {
        if (containerRef.current && containerRef.current.contains(bubble)) {
          containerRef.current.removeChild(bubble);
        }
      });
      bubbles.current = [];
    };
  }, []);

  return <div ref={containerRef} className="bubble-container" />;
};

export default Bubbles;
