import React from 'react';
import { motion } from 'framer-motion';
import URLShortenerImage from '../assets/URLShortenerImage.png';
import NotesImage from '../assets/NotesImage.png';
import NikeImage from '../assets/NikeImage.png';
import MovieImage from '../assets/MovieImage.png';
import ChatbotImage from '../assets/ChatbotImage.png';
import JobImage from '../assets/JobImage.png';

const projects = [
  { id: '01', title: "iURL", desc: "Full-stack URL infrastructure", tech: "FastAPI + MongoDB", image: URLShortenerImage, link: "https://iurl.netlify.app/" },
  { id: '02', title: "NOTIFY", desc: "MERN authentication system", tech: "Node + Express", image: NotesImage, link: "https://github.com/IsmatQasim/ismat-qasim-mern-10pshine" },
  { id: '03', title: "NIKE", desc: "High-performance brand landing", tech: "React + Tailwind", image: NikeImage, link: "https://nike-landing-with-react.netlify.app/" },
  { id: '04', title: "FILM", desc: "Media discovery engine", tech: "REST API + React", image: MovieImage, link: "https://movie-app-reactiq.netlify.app/" },
  { id: '05', title: "GPT", desc: "Conversational AI interface", tech: "Python + GPT-API", image: ChatbotImage, link: "https://github.com/IsmatQasim/Chatbot-with-python" },
  { id: '06', title: "JOB", desc: "Vanilla JS application tracker", tech: "Local Storage + JS", image: JobImage, link: "https://job-appp-tracker.netlify.app/" },
];

const Projects = () => {
  return (
    <section id="projects" className="container py-32">
      <div className="mb-32 flex flex-col md:flex-row justify-between items-baseline gap-8">
        <div>
          <span className="section-label">// COLLECTION_EXHIBITION</span>
          <h2 className="font-editorial text-[18vw] md:text-[12vw]">ARCHIVE</h2>
        </div>
        <div className="meta-tiny opacity-30 text-right max-w-[200px] hidden md:block">
          RECORDS_COUNT: 006 <br />
          STORAGE_STATUS: OPTIMIZED <br />
          VERSION: 2.0.26
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
        {projects.map((project, idx) => (
          <motion.div 
            key={project.id}
            className="group relative bg-black p-8 md:p-12 overflow-hidden transition-all duration-700 hover:bg-[#050505]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Project Image Container */}
            <div className="aspect-video relative overflow-hidden mb-12 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-1000">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Group */}
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[12px] text-white/20">[{project.id}]</span>
                <div className="text-right">
                  <h3 className="font-editorial text-[10vw] md:text-[4vw] text-white leading-none mb-4 transition-all group-hover:italic">
                    {project.title}
                  </h3>
                  <p className="font-main text-[14px] text-white/40 uppercase tracking-widest leading-none">
                    {project.desc}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="meta-tiny text-white/20">
                  {project.tech}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="font-mono text-[10px] text-white underline underline-offset-8 cursor-none tracking-widest hover:text-white/60 transition-colors"
                >
                  ACCESS_FILE
                </a>
              </div>
            </div>

            {/* Hover Scanline Decor */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40 -translate-y-full group-hover:animate-[scanline_3s_linear_infinite]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
