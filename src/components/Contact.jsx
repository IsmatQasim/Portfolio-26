import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Aesthetic Background blur */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg mb-12 font-light">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.a 
            href="mailto:ismat6812@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(236,72,153,0.3)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 glass-panel hover:border-pink-500/50 px-8 py-5 rounded-2xl transition-all"
          >
            <Mail className="text-pink-400" />
            <span className="font-medium text-zinc-200">ismat6812@gmail.com</span>
          </motion.a>

          <motion.a 
            href="tel:03162661684"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(168,85,247,0.3)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 glass-panel hover:border-purple-500/50 px-8 py-5 rounded-2xl transition-all"
          >
            <Phone className="text-purple-400" />
            <span className="font-medium text-zinc-200">0316-2661684</span>
          </motion.a>

          <motion.a 
            href="https://github.com/IsmatQasim"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(236,72,153,0.3)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 glass-panel hover:border-pink-500/50 px-8 py-5 rounded-2xl transition-all"
          >
            <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            <span className="font-medium text-zinc-200">GitHub</span>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/ismat-qasim-936140246/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(168,85,247,0.3)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 glass-panel hover:border-purple-500/50 px-8 py-5 rounded-2xl transition-all"
          >
            <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
            <span className="font-medium text-zinc-200">LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
