import React from 'react';

const iconGrid = (pattern) => (
  <div className="mx-auto mb-5 grid grid-cols-4 gap-1 w-20 h-20 rounded-2xl bg-white/5 p-2">
    {pattern.split('').map((pixel, index) => (
      <span
        key={index}
        className={`block rounded-[3px] ${pixel === '1' ? 'bg-white' : 'bg-white/10'}`}
      />
    ))}
  </div>
);

const Contact = () => {
  const icons = {
    email: '1100110011001100',
    github: '1110101011101111',
    linkedin: '1001110110011101',
  };

  return (
    <section id="contact" className="container relative py-32">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <span className="section-label">// GET_IN_TOUCH</span>
          <h2 className="font-editorial text-[9vw] md:text-[5vw] text-white leading-tight">Contact</h2>
          <p className="font-main text-[16px] text-white/40 max-w-2xl mx-auto uppercase tracking-[0.2em]">
            Reach out via email, GitHub, or LinkedIn.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:ismat6812@gmail.com"
            className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center transition hover:bg-white/5"
          >
            {iconGrid(icons.email)}
            <p className="meta-tiny text-white/40 uppercase tracking-[0.2em] mb-3">Email</p>
            <p className="font-main text-[16px] text-white">ismat6812@gmail.com</p>
          </a>

          <a
            href="https://github.com/IsmatQasim"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center transition hover:bg-white/5"
          >
            {iconGrid(icons.github)}
            <p className="meta-tiny text-white/40 uppercase tracking-[0.2em] mb-3">GitHub</p>
            <p className="font-main text-[16px] text-white">github.com/IsmatQasim</p>
          </a>

          <a
            href="https://linkedin.com/in/ismat-qasim-936140246/"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-black/40 p-8 text-center transition hover:bg-white/5"
          >
            {iconGrid(icons.linkedin)}
            <p className="meta-tiny text-white/40 uppercase tracking-[0.2em] mb-3">LinkedIn</p>
            <p className="font-main text-[16px] text-white">linkedin.com/in/ismat-qasim</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
