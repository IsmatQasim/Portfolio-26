import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="poster-section container overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* LEFT: NAMES */}
        <div className="lg:col-span-8 flex flex-col items-start pt-24 md:pt-0">
          <div className="relative">
            <motion.h1 
              className="font-editorial text-[25vw] md:text-[14vw] leading-[0.8] tracking-tighter"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              ISMAT
            </motion.h1>
            <motion.h1 
              className="font-editorial text-[25vw] md:text-[14vw] leading-[0.8] tracking-tighter"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              QASIM
            </motion.h1>
          </div>
          
          {/* Mobile Metadata */}
          <div className="flex lg:hidden flex-col gap-3 mt-12">
            <div className="meta-tiny flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-white blink"></span>
              [ SYSTEM ONLINE ]
            </div>
            <div className="meta-tiny">[ KARACHI, PK ]</div>
          </div>
        </div>

        {/* RIGHT: INTRO */}
        <div className="lg:col-span-4 flex flex-col justify-end h-full pt-12 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <p className="font-main text-[18px] md:text-[22px] text-white/90 leading-[1.3] max-w-sm">
                Frontend engineer crafting <br />
                playful digital systems <br />
                through code + visual experimentation
              </p>
            </div>

            <div className="flex flex-col gap-3 hidden lg:flex">
              <div className="meta-tiny flex items-center gap-3">
                <span className="w-1 h-1 bg-white blink"></span>
                [ STATUS: ACTIVE ]
              </div>
              <div className="meta-tiny">[ LOCATION: KARACHI, PK ]</div>
            </div>

            <div className="pt-8">
              <a href="#projects" className="btn-minimal group flex items-center justify-between w-full max-w-[200px]">
                <span>ARCHIVE</span>
                <span className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              <a href="mailto:ismat6812@gmail.com" className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                email
              </a>
              <a href="https://github.com/IsmatQasim" target="_blank" rel="noreferrer" className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                github
              </a>
              <a href="https://linkedin.com/in/ismat-qasim-936140246/" target="_blank" rel="noreferrer" className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                linkedin
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Atmospheric Decoration */}
      <div className="absolute bottom-12 left-12 meta-tiny opacity-5 flex items-center gap-8 hidden md:flex">
        <span>V_2.0.26 // SYS_ID: IQ_NODE_01</span>
        <div className="w-24 h-[1px] bg-white" />
      </div>
    </section>
  );
};

export default Hero;
