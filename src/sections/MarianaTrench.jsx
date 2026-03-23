export default function MarianaTrench() {
  return (
    <section className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 uppercase tracking-tighter drop-shadow-2xl">
          Challenger Deep
        </h2>
        <div className="h-0.5 w-32 bg-white/20 mx-auto" />
        <p className="text-xl md:text-3xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          10,984 meters below the surface.
        </p>
        <p className="text-lg md:text-xl text-white/50">
          The deepest point on Earth. A place of total darkness, freezing temperatures, and crushing pressure.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-12 group inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 pointer-events-auto shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Explore More / Return to Surface
        </button>
      </div>
    </section>
  );
}
