import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Users } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional Summary</h2>
            <div className="w-20 h-1 dream-gradient-bg mx-auto rounded-full mb-8" />
            <p className="text-lg text-zinc-300 leading-relaxed glass-panel p-8 rounded-2xl font-light">
              I am a fresh Bachelor of Software Engineering (BSSE) graduate and a passionate front-end developer with a strong foundation in building user-centric, visually appealing digital experiences. I am eager to contribute to an innovative organization, collaborate with dynamic teams, and apply my technical and creative skills to deliver impactful solutions in a fast-paced, forward-thinking environment.
            </p>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 text-center text-zinc-100">Core Strengths</motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 text-pink-400">
                <Sparkles size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-zinc-100">Observational Skills</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                My sharp observational skills allow me to identify nuances and deliver refined, impactful solutions.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 text-purple-400">
                <Code2 size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-zinc-100">Rapid Learning</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                I rapidly grasp new technologies and methodologies, ensuring consistent growth in a dynamic industry.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 text-indigo-400">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-zinc-100">Leadership</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                I inspire and guide teams toward achieving excellence through collaboration and decisive leadership.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
