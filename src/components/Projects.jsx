import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import NikeImage from '../assets/NikeImage.png';
import MovieImage from '../assets/MovieImage.png';
import MealImage from '../assets/MealImage.png';
import ChatbotImage from '../assets/ChatbotImage.png';
import OrionImage from '../assets/OrionImage.png';
import NotesImage from '../assets/NotesImage.png';
import JobImage from '../assets/JobImage.png';
import URLShortenerImage from '../assets/URLShortenerImage.png';

const projects = [
  {
    image: URLShortenerImage,
    title: "iURL",
    description:
      "iURL is a full-stack URL shortener built with React, FastAPI, and MongoDB. It allows users to generate short links instantly with custom aliases, fast redirection, and real-time URL history management.",
    GithubLink: "https://github.com/IsmatQasim/URL-Shortener",
    RepoLink: "https://iurl.netlify.app/",
  },
  {
    image: NotesImage,
    title: "Notify",
    description: "Notify is a full-stack MERN note-taking app with secure authentication, rich text editor, CRUD operations, favorites, drafts, and today's notes management.",
    GithubLink: "https://github.com/IsmatQasim/ismat-qasim-mern-10pshine",
    RepoLink: "https://github.com/IsmatQasim/ismat-qasim-mern-10pshine",
  },

  {
    image: NikeImage,
    title: "Nike Website",
    description: "Developed an impressive Nike landing website using ReactJS + Vite and Tailwind CSS.",
    GithubLink: "https://nike-landing-with-react.netlify.app/",
    RepoLink: "https://github.com/IsmatQasim/Nike-With-Tailwind",
  },
  {
    image: MovieImage,
    title: "Film Frenzy",
    description: "Developed a movie app named Film Frenzy integrated with the OMDb API using ReactJS.",
    GithubLink: "https://movie-app-reactiq.netlify.app/",
    RepoLink: "https://github.com/IsmatQasim/Movie-App",
  },

  {
    image: ChatbotImage,
    title: "Chat Bot",
    description: "Developed a Chatbot named ChatGPT 2.0 using Python (GPT API) and for UI I used HTML, CSS & JS.",
    GithubLink: "https://github.com/IsmatQasim/Chatbot-with-pytho",
    RepoLink: "https://github.com/IsmatQasim/Chatbot-with-python",
  },
  {
    image: JobImage,
    title: "Job Application Tracker",
    description: "A Job Application Tracker built with Vanilla JavaScript featuring CRUD operations, search, status filtering, and localStorage persistence.",
    GithubLink: "https://job-appp-tracker.netlify.app/",
    RepoLink: "https://github.com/IsmatQasim/Job-Application-Tracker",
  },
  {
    image: MealImage,
    title: "Meal App",
    description: "Developed a Meal App Using JavaScript where users can search and see recipes.",
    GithubLink: "https://meal-app-js.surge.sh/",
    RepoLink: "https://github.com/IsmatQasim/Meal-App-with-API",
  },
  {
    image: OrionImage,
    title: "Orion Dashboard",
    description: "Developed a Orion Dashboard Using Angular.",
    GithubLink: "https://orion-angular.netlify.app/dashboard",
    RepoLink: "https://github.com/IsmatQasim/Orion-with-angular",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 dream-gradient-bg mx-auto rounded-full mb-8" />
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light transition-colors">
            A showcase of my recent work, highlighting my expertise in building functional, responsive, and beautifully designed web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-10 my-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className="w-[300px] md:w-[380px] self-stretch h-auto pb-12">
                <div className="glass-panel rounded-3xl overflow-hidden group h-full flex flex-col border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-2xl font-bold text-white tracking-wide">{project.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow bg-zinc-900/50">
                    <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                      <a
                        href={project.RepoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        Code
                      </a>
                      <a
                        href={project.GithubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 border border-transparent text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .my-swiper .swiper-pagination-bullet {
          background-color: #a1a1aa;
          opacity: 0.5;
        }
        .my-swiper .swiper-pagination-bullet-active {
          background-image: linear-gradient(to right, #a855f7, #3b82f6);
          opacity: 1;
        }
        .my-swiper .swiper-button-next,
        .my-swiper .swiper-button-prev {
          color: white;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .my-swiper .swiper-button-next:after,
        .my-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .my-swiper .swiper-button-next:hover,
        .my-swiper .swiper-button-prev:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.2);
        }
        
        /* Mobile Responsiveness for Arrows */
        @media (max-width: 768px) {
          .my-swiper .swiper-button-next,
          .my-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
            background: rgba(0,0,0,0.3);
            border-color: rgba(255,255,255,0.05);
          }
          .my-swiper .swiper-button-next:after,
          .my-swiper .swiper-button-prev:after {
            font-size: 12px;
          }
          .my-swiper .swiper-button-prev {
            left: 2px;
          }
          .my-swiper .swiper-button-next {
            right: 2px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
