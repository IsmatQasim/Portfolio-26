import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] p-8 md:p-12 pointer-events-none flex justify-between items-start">
      <div className="pointer-events-auto">
        <a href="#" className="font-editorial text-[32px] text-white cursor-none hover:opacity-60 transition-opacity">I.Q</a>
      </div>
      
      <nav className="pointer-events-auto flex flex-col items-end gap-3 translate-y-3">
        {[
          { name: 'ARCHIVE', id: 'projects' },
          { name: 'IDENTITY', id: 'about' },
          { name: 'LOG', id: 'experience' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="font-mono text-[10px] text-white/20 hover:text-white transition-colors cursor-none tracking-[0.4em] text-right"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Retro HUD Decoration Overlay */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 hidden lg:flex">
        <div className="flex flex-col gap-2 scale-y-150">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1 h-px bg-white opacity-10" />
          ))}
        </div>
        <div className="h-48 w-[1px] bg-white opacity-5" />
        <div className="meta-tiny rotate-90 origin-right translate-x-4 opacity-5 tracking-[1em] whitespace-nowrap">
          SYSTEM_HUD_v2.0 // EST_2026
        </div>
      </div>
    </header>
  );
};

export default Header;
