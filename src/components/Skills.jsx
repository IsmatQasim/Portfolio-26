import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Front-End Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "TailwindCSS", "Bootstrap"],
    color: "from-pink-400 to-rose-400"
  },
  {
    title: "Back-End & DB",
    skills: ["Node.js", "MongoDB", "Event-Driven Architecture", "API Design"],
    color: "from-purple-400 to-fuchsia-400"
  },
  {
    title: "Tools & Quality",
    skills: ["Git", "GitHub", "TypeScript", "Figma", "Python", "Pino Logger", "SonarQube"],
    color: "from-indigo-400 to-blue-400"
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "Data Structures", "Algorithms", "Clean Code Design", "Unit Testing"],
    color: "from-orange-300 to-rose-300"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
          <div className="w-20 h-1 dream-gradient-bg mx-auto rounded-full mb-8" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light transition-colors">
            A comprehensive toolkit that I leverage to build robust, scalable, and visually appealing applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${category.color} opacity-10 blur-[80px] rounded-full group-hover:opacity-30 transition-opacity duration-700`} />
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-zinc-100">
                <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-zinc-800/40 hover:bg-zinc-700/60 border border-white/5 hover:border-white/20 rounded-xl text-sm font-medium text-zinc-300 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
