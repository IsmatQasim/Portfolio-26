import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  { role: "MERN_STACK_INTERN", company: "10PEARLS", period: "2024", duration: "08W" },
  { role: "FRONTEND_INTERN", company: "GLOBAL_E-COMM", period: "2023", duration: "04W" },
];

const Experience = () => {
  return (
    <section id="experience" className="container py-32">
      <div className="mb-24">
        <span className="section-label">// PROFESSIONAL_LOG</span>
        <h2 className="font-editorial text-[18vw] md:text-[14vw] text-white">LOG</h2>
      </div>

      <div className="space-y-px bg-white/5 border border-white/5">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            className="group grid md:grid-cols-12 gap-8 items-center py-16 px-8 md:px-12 bg-black transition-all duration-700 hover:bg-[#050505]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          >
            <div className="md:col-span-2">
              <span className="meta-tiny opacity-20 group-hover:opacity-60 transition-opacity">{exp.period}</span>
            </div>
            
            <div className="md:col-span-7">
               <h3 className="font-editorial text-[8vw] md:text-[5vw] text-white/40 group-hover:text-white transition-all duration-700">
                {exp.role}
              </h3>
            </div>
            
            <div className="md:col-span-3 text-right">
              <p className="font-main text-[16px] text-white/20 group-hover:text-white/60 transition-all duration-700 uppercase tracking-widest leading-none mb-2">
                {exp.company}
              </p>
              <span className="meta-tiny opacity-10 group-hover:opacity-30 transition-opacity">
                CONTRIBUTION: {exp.duration}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
