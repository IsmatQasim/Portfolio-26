import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Ismat Qasim. Crafted with 💖.</p>
      </footer>
    </div>
  );
}

export default App;
