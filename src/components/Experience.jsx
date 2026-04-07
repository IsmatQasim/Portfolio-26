import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer Intern",
    company: "10Pearls",
    duration: "08 Weeks"
  },
  {
    id: 2,
    role: "Front-end Developer Intern",
    company: "Global E-Comm Services (Pvt.) Ltd",
    duration: "04 Weeks"  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience</h2>
          <div className="w-20 h-1 dream-gradient-bg mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-pink-500/20 via-purple-500/20 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center justify-between mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-5/12 hidden md:block" />
              
              <div className="z-10 bg-zinc-950 border border-pink-500/30 w-12 h-12 rounded-full flex items-center justify-center text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)] mb-6 md:mb-0">
                <Briefcase size={20} />
              </div>

              <div className="w-full md:w-5/12">
                <div className="glass-panel p-8 rounded-3xl hover:border-pink-500/30 transition-colors duration-300 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-pink-400 font-medium text-sm mb-3 block tracking-wide">{exp.duration}</span>
                  <h3 className="text-2xl font-bold mb-2 text-zinc-100">{exp.role}</h3>
                  <h4 className="text-zinc-400 font-medium mb-4">{exp.company}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
