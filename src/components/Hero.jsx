import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = () => {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    const sequence = [
      { text: "> init portfolio --user 'Ismat Qasim'", delay: 500, color: "text-zinc-200" },
      { text: "Loading UI components...", delay: 1500, color: "text-zinc-400" },
      { text: "Status: Front-End Developer ready.", delay: 2500, color: "text-emerald-400" },
      { text: "> Logic that feels inevitable.", delay: 3500, color: "text-purple-400 font-medium" }
    ];
    
    let timeouts = [];
    sequence.forEach(({ text, delay, color }, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, { text, color, id: index }]);
      }, delay);
      timeouts.push(timeout);
    });
    
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="w-full max-w-lg glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] text-left backdrop-blur-md bg-zinc-950/60"
    >
      {/* Terminal Header */}
      <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
         <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
         <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
         <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
         <span className="ml-4 text-xs font-mono text-zinc-400">ismat@portfolio ~ /dev/intro</span>
      </div>
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm md:text-base leading-relaxed tracking-tight min-h-[140px]">
         {lines.map((line) => (
           <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={line.id} className={`${line.color} mb-2`}>
             {line.text}
           </motion.div>
         ))}
         <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2.5 h-4 bg-pink-500 ml-1 translate-y-0.5"></motion.div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Ambient Hazy Orbs Background */}
      <div className="absolute inset-0 z-0 bg-[#09090b] overflow-hidden">
        {/* Largest orb in top-right */}
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />
        
        {/* Medium orb in bottom-right */}
        <div className="absolute -bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        
        {/* Smaller, very faint orb in bottom-left */}
        <div className="absolute -bottom-[5%] -left-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </div>

      {/* Split-Screen Overlay Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12 mt-12 lg:mt-0">
        
        {/* Left Side: Ultra-Premium Type-Forward & Scroll Reveal */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl w-full">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 mb-8 w-max mx-auto lg:mx-0 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            <span className="text-pink-200 text-xs tracking-widest uppercase font-semibold">Available for Work</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-light mb-2 text-zinc-400"
          >
            Hi, I'm
            <div className="inline-block mt-2 lg:block lg:mt-4 text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 relative inline-block">
                Ismat Qasim
              </span>
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl font-light mt-8 mb-8 text-zinc-400 max-w-lg leading-relaxed"
          >
            I engineer <span className="text-zinc-100 font-medium">high-performance web interfaces</span>. I design logic that feels inevitable, blending seamless interactivity with striking visual aesthetics.
          </motion.p>
          
          {/* Tech Stack Mini-Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4 mb-10 w-full justify-center lg:justify-start"
          >
            <span className="text-sm font-medium tracking-widest text-zinc-500 uppercase">Stack</span>
            <div className="h-4 w-[1px] bg-zinc-700"></div>
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
              {['React', 'JavaScript', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 backdrop-blur-md shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 items-center w-full justify-center lg:justify-start"
          >
            <a href="#projects" className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] tracking-wide whitespace-nowrap w-full sm:w-auto">
              Explore Work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full flex items-center justify-center glass-panel text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 tracking-wide border border-white/10 whitespace-nowrap w-full sm:w-auto">
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Right Side: Animated Code / Terminal Glassmorphism */}
        <div className="flex-1 w-full flex justify-center lg:justify-end perspective-1000 mt-10 lg:mt-0 relative z-20">
           <TerminalWindow />
        </div>
        
      </div>

      {/* Gentle scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-light hidden md:block">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-zinc-500 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
