import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="poster-section container">
      {/* BACKGROUND HEADING (Refined) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none overflow-hidden select-none">
        <h2 className="font-editorial text-[30vw] text-white/[0.02] leading-none">
          SIGNAL
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center py-24">
        <div className="text-center space-y-4 mb-24">
          <span className="section-label mb-4">// TRANSMISSION_ENTRY</span>
          <h3 className="font-editorial text-[10vw] md:text-[6vw] text-white">HELLO</h3>
          <p className="font-main text-[16px] md:text-[18px] text-white/40 uppercase tracking-[0.2em]">
            READY TO COLLABORATE?
          </p>
        </div>

        <form className="w-full space-y-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 group">
              <label className="meta-tiny opacity-20 group-focus-within:opacity-100 transition-opacity">IDENT_NAME</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/10 focus:border-white py-4 font-main text-[18px] text-white outline-none transition-all placeholder:text-white/5" 
                placeholder="YOUR NAME" 
              />
            </div>
            <div className="space-y-4 group">
              <label className="meta-tiny opacity-20 group-focus-within:opacity-100 transition-opacity">IDENT_COORD</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/10 focus:border-white py-4 font-main text-[18px] text-white outline-none transition-all placeholder:text-white/5" 
                placeholder="YOUR EMAIL" 
              />
            </div>
          </div>

          <div className="space-y-4 group">
            <label className="meta-tiny opacity-20 group-focus-within:opacity-100 transition-opacity">MSG_STREAM</label>
            <textarea 
              rows="3" 
              className="w-full bg-transparent border-b border-white/10 focus:border-white py-4 font-main text-[18px] text-white outline-none transition-all resize-none placeholder:text-white/5" 
              placeholder="YOUR MESSAGE CONTENT"
            ></textarea>
          </div>

          <div className="flex flex-col items-center pt-8">
            <button className="btn-minimal px-24 py-10 w-full md:w-auto cursor-none group relative overflow-hidden">
              <span className="relative z-10">TRANSMIT_SIGNAL</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">TRANSMIT_SIGNAL</span>
            </button>
          </div>
        </form>

        <div className="mt-32 flex flex-col items-center gap-6">
          <div className="flex gap-12">
            <a href="mailto:ismat6812@gmail.com" className="meta-tiny hover:text-white transition-colors cursor-none underline underline-offset-4 decoration-white/10 hover:decoration-white">EMAIL</a>
            <a href="https://linkedin.com/in/ismat-qasim-936140246/" className="meta-tiny hover:text-white transition-colors cursor-none underline underline-offset-4 decoration-white/10 hover:decoration-white">LINKEDIN</a>
          </div>
          <div className="w-[1px] h-12 bg-white/5" />
          <p className="meta-tiny opacity-10">EST_2026 // KARACHI_SYSTEM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
