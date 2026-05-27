import React from 'react';
import { motion } from 'framer-motion';

const education = [
  { 
    id: "01",
    degree: "BSSE", 
    institute: "UOK_UBIT", 
    period: "2021 — 2025",
  },
  { 
    id: "02",
    degree: "ICS", 
    institute: "COLLEGE_BLOCK-13", 
    period: "2019 — 2021",
    
  },
];

const Education = () => {
  return (
    <section id="education" className="container py-32">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
        <div className="lg:max-w-xl">
          <span className="section-label">// SYSTEM_PATHWAY</span>
          <h2 className="font-editorial text-[18vw] md:text-[14vw] text-white leading-[0.75]">PATH</h2>
        </div>
        <div className="lg:pt-24 max-w-xs">
          <p className="font-main text-[13px] text-white/40 uppercase leading-relaxed">
            The evolution of a technical mind. <br /> 
            Synthesizing theoretical foundations with 
            modern digital architecture.
          </p>
        </div>
      </div>
      
      <div className="space-y-32">
        {education.map((edu, idx) => (
          <motion.div 
            key={edu.id} 
            className="grid lg:grid-cols-12 gap-12 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.2 }}
          >
            {/* Period Indicator */}
            <div className="lg:col-span-3 flex flex-col justify-between border-l border-white/10 pl-8 group-hover:border-white transition-colors">
              <span className="font-mono text-[14px] text-white/20 group-hover:text-white transition-colors">{edu.period}</span>
              <span className="meta-tiny text-white/5 group-hover:opacity-100 transition-opacity">0{idx + 1} // ARCHIVE</span>
            </div>
            
            {/* Degree Details */}
            <div className="lg:col-span-9 space-y-8">
              <div className="space-y-4">
                <h3 className="font-editorial text-[10vw] md:text-[5.5vw] text-white group-hover:italic transition-all duration-700">
                  {edu.degree}
                </h3>
                <p className="font-main text-[16px] md:text-[20px] text-white/60 tracking-widest leading-none">
                  {edu.institute}
                </p>
              </div>
              
              
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-48 flex justify-center opacity-5">
        <div className="w-[1px] h-32 bg-white" />
      </div>
    </section>
  );
};

export default Education;
