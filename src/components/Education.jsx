import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationList = [
  {
    id: 1,
    degree: "Bachelor Of Software Engineering (BSSE)",
    institute: "University Of Karachi (UBIT)",
    period: "2021 - 2025"
  },
  {
    id: 2,
    degree: "Intermediate In Computer Science (ICS)",
    institute: "College Block-13 Gulistan-e-Jauhar",
    period: "2019 - 2021"
  },
  {
    id: 3,
    degree: "Matriculation In Science",
    institute: "FHG School, Karachi",
    period: "2018 - 2019"
  }
];

const courses = [
  { name: "Web & App Development", source: "SMIT" },
  { name: "Git & Github", source: "MLSA" }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Education & Certifications</h2>
          <div className="w-20 h-1 dream-gradient-bg mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Education Vertical Cards */}
          <div className="lg:col-span-2 space-y-6">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="glass-panel p-8 rounded-3xl flex flex-col sm:flex-row gap-6 items-start group hover:-translate-y-1 transition-transform border border-white/5 hover:border-purple-500/30"
              >
                <div className="mt-1 bg-purple-500/10 text-purple-400 p-4 rounded-2xl flex-shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div className="w-full">
                  <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-2 gap-2">
                    <h3 className="text-xl font-bold text-zinc-100">{edu.degree}</h3>
                    <span className="text-purple-400 font-medium whitespace-nowrap text-sm bg-purple-500/10 px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 font-light">{edu.institute}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Courses Sidebar */}
          <div className="space-y-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold flex items-center gap-3 mb-6 text-zinc-100"
            >
              <Award className="text-pink-400" /> Additional Courses
            </motion.h3>
            
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-panel p-6 rounded-3xl border-l-[3px] border-l-pink-400 group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150" />
                <h4 className="text-lg font-semibold mb-1 relative z-10 text-zinc-100">{course.name}</h4>
                <p className="text-zinc-400 font-light text-sm relative z-10">{course.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
