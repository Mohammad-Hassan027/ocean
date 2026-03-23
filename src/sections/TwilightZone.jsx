export default function TwilightZone() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-4 md:px-16 overflow-hidden">
      
      {/* Cinematic Marquee Ticker */}
      <div className="absolute top-1/4 w-[200vw] -left-1/2 overflow-hidden flex whitespace-nowrap opacity-[0.03] font-mono text-8xl md:text-[150px] font-bold text-white tracking-tighter uppercase pointer-events-none">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          DIEL VERTICAL MIGRATION — MILLIONS RISING TO SURVIVE — THE GREATEST MIGRATION ON EARTH —&nbsp; 
        </div>
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          DIEL VERTICAL MIGRATION — MILLIONS RISING TO SURVIVE — THE GREATEST MIGRATION ON EARTH —&nbsp; 
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center z-10 mix-blend-screen">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-teal-100/80 uppercase tracking-widest">
            The Twilight Zone
          </h2>
          <div className="h-1 w-24 bg-teal-500/50" />
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
            As we pass 200 meters, sunlight rapidly fades. Photosynthesis is no longer possible. Welcome to the Mesopelagic.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-[12px] border border-white/10 p-8 rounded-3xl shadow-2xl space-y-4 pointer-events-auto">
          <h3 className="text-2xl font-bold text-teal-300 mb-4 tracking-wider">Crushing Pressure</h3>
          <p className="text-white/70 leading-relaxed font-light">
            Every 10 meters deeper adds 1 atmosphere of pressure. Down here, the environment compresses air, light, and life itself. 
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 opacity-50 font-mono text-sm tracking-widest text-teal-200">
            <span>SURFACE: 1 ATM</span>
            <span>CURRENT: ~20 ATM</span>
          </div>
        </div>
      </div>
    </section>
  );
}
