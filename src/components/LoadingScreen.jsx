import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
  const [lines, setLines] = useState([]);
  const [step, setStep] = useState(0);

  const bootSequence = [
    "BOOTING SYSTEM...",
    "LOADING INTERFACE...",
    "LOADING PROJECT ARCHIVE...",
    "INITIALIZING EXPERIENCE...",
    "WELCOME ISMAT_QASIM"
  ];

  useEffect(() => {
    if (step < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[step]]);
        setStep(step + 1);
      }, step === bootSequence.length - 1 ? 800 : 350);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(finishTimer);
    }
  }, [step, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-12 md:p-24 overflow-hidden"
      exit={{ 
        opacity: 0,
        filter: "blur(20px) brightness(4)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      <div className="space-y-4 font-mono text-[12px] md:text-[14px] text-white">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="opacity-10">0{i + 1}</span>
            <span className={i === bootSequence.length - 1 ? "text-white" : "text-white/40"}>
              {line}
            </span>
          </motion.div>
        ))}
        {step < bootSequence.length && (
          <div className="flex items-center gap-4">
            <span className="opacity-10">0{lines.length + 1}</span>
            <motion.div
              className="w-2 h-4 bg-white"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
            />
          </div>
        )}
      </div>

      <div className="absolute bottom-12 right-12 flex items-center gap-4">
        <div className="w-1.5 h-1.5 bg-white/20" />
        <span className="font-mono text-[9px] text-white/10 tracking-[0.4em]">ASYNC_BOOT_v.2.0</span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
