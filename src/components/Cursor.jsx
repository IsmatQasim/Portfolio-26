import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsHovering(target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button'));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  return (
    <>
      {/* Primary Solid White Block */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white z-[12000] pointer-events-none shadow-[0_0_24px_rgba(255,255,255,0.25)]"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.2 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      
      {/* Outer Tracking Frame */}
      <motion.div
        className="fixed top-0 left-0 w-14 h-14 rounded-full border border-white/30 z-[11999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 0 : 0.38
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      />
    </>
  );
};

export default Cursor;
