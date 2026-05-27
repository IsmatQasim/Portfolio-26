import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React.js",
  "JavaScript",
  "Node.js + Express",
  "Tailwind CSS",
  "FastAPI + Python",
  "MongoDB + SQL",
];

const Skills = () => {
  return (
    <section className="container py-32">
      <span className="section-label">// TECHNICAL_ARSENAL</span>
      
      <div className="grid lg:grid-cols-12 gap-24 items-end">
        <div className="lg:col-span-8 space-y-px">
          {skills.map((skill, idx) => (
            <motion.div 
              key={idx}
              className="group flex items-baseline gap-8 border-b border-white/5 py-10 transition-colors hover:bg-white/[0.02]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-mono text-[11px] text-white/10 group-hover:text-white/40 transition-colors">0{idx + 1}</span>
              <h3 className="font-editorial text-[10vw] md:text-[6.5vw] text-white/10 group-hover:text-white transition-all duration-700 cursor-none select-none">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-4 pb-12">
          <div className="p-12 border border-white/5 bg-[#050505] space-y-12">
            <div className="space-y-4">
              <h4 className="meta-tiny opacity-40">CAPABILITIES</h4>
              <p className="font-main text-[13px] text-white/40 leading-relaxed uppercase">
                Architecture of scalable systems <br />
                Fluid motion design <br />
                Performance optimization <br />
                Rapid prototyping
              </p>
            </div>
            
            <div className="flex justify-between items-center opacity-20">
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1 h-4 bg-white" />
                ))}
              </div>
              <span className="font-mono text-[9px] tracking-widest">STABLE_BUILD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
