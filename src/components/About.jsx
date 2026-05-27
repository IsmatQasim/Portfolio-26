import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="poster-section container">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <span className="section-label">// IDENTITY_NARRATIVE</span>
          <h2 className="font-editorial text-[18vw] md:text-[14vw] mb-24">
            STORY
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-24 items-start">
        <div className="lg:col-span-6 lg:col-start-4 space-y-12">
          <motion.p 
            className="font-main text-[22px] md:text-[30px] text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            I am a software engineer focused on building 
            digital experiences that feel both 
            <span className="text-white/40 italic"> precise </span> and 
            <span className="text-white/40 italic"> playful</span>.
          </motion.p>
          
          <div className="pt-12 flex flex-col md:flex-row gap-16 border-t border-white/5">
            <div className="space-y-4">
               <h3 className="meta-tiny opacity-40">PHILOSOPHY</h3>
               <p className="font-main text-[14px] text-white/40 leading-relaxed max-w-sm">
                My approach blends technical rigor with a 
                deep appreciation for visual aesthetics. 
                I design systems that prioritize emotional 
                resonance and flawless execution.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="meta-tiny opacity-40">OBJECTIVE</h3>
              <p className="font-main text-[14px] text-white/40 leading-relaxed max-w-sm">
                Currently exploring the boundaries of 
                web technology, focusing on motion 
                identity and experimental interfaces 
                that challenge the expected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
