import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-sky-400 bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-neutral-50 mb-6 tracking-tight text-shadow-lg">
          YUSSEL ESTRADA
        </h1>
        <h2 className="text-2xl md:text-4xl text-neutral-50 mb-8 font-light tracking-wide text-shadow-sm">
          PHOTOGRAPHY
        </h2>
        <p className="text-xl md:text-2xl text-neutral-50 max-w-2xl mx-auto leading-relaxed text-shadow-sm">
          Capturing moments that define fashion, music, and personal stories through a distinctive visual narrative.
        </p>
        {/* <div className="mt-12">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-3 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
          >
            VIEW WORK
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;