import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="retro-scanline" />
      <div className="pixel-noise" />
      <Cursor />
      
      {!loading && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          
          <footer className="py-32 text-center">
            <p className="font-mono text-[10px] text-[#222] tracking-[1em] uppercase">
              DESIGNED_BY_ISMAT_QASIM_//_ARCHIVE_2026
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
