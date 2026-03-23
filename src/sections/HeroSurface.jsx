export default function HeroSurface() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl mb-8 uppercase tracking-widest">
          Ocean Depths
        </h1>
        
        <div className="bg-black/30 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl mb-12">
          <p className="text-xl md:text-3xl text-yellow-300 font-light tracking-wide leading-relaxed drop-shadow-md">
            The sun is a memory. You are entering the realm where light dies.
          </p>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 pointer-events-auto"
        >
          Begin Descent
          <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </section>
  );
}
