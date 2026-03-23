import { motion } from 'framer-motion';

export default function TwilightZone() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-4 md:px-16 overflow-hidden">
      
      {/* Cinematic Marquee Ticker */}
      <div className="absolute top-[15%] w-[200vw] -left-1/2 overflow-hidden flex whitespace-nowrap opacity-[0.02] font-mono text-[100px] md:text-[250px] font-bold text-white tracking-tighter uppercase pointer-events-none mix-blend-screen">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          DIEL VERTICAL MIGRATION — MILLIONS RISING TO SURVIVE — THE GREATEST MIGRATION ON EARTH —&nbsp; 
        </div>
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          DIEL VERTICAL MIGRATION — MILLIONS RISING TO SURVIVE — THE GREATEST MIGRATION ON EARTH —&nbsp; 
        </div>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-12 items-center z-10 mix-blend-screen relative">
        <div className="space-y-12">
          
          <motion.div
            initial={{ opacity: 0, x: -100, skewX: -20 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
          >
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl leading-none">
              THE<br/>TWILIGHT<br/>ZONE
            </h2>
          </motion.div>
          
          <div className="h-px w-32 bg-teal-500/50" />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed font-sans font-light"
          >
            As we pass 200 meters, sunlight rapidly fades. Photosynthesis is no longer possible. Welcome to the Mesopelagic.
          </motion.p>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
           whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 1, ease: "easeOut" }}
           className="bg-black/20 backdrop-blur-3xl border-l border-t border-white/5 p-12 shadow-2xl space-y-8 pointer-events-auto"
        >
          <div className="flex items-center gap-4 border-b border-white/5 pb-6">
             <div className="w-10 h-px bg-teal-500" />
             <h3 className="text-sm font-mono font-bold text-white/50 tracking-[0.3em] uppercase">Crushing Pressure</h3>
          </div>
          <p className="text-white/70 leading-relaxed font-sans font-light text-lg">
            Every 10 meters deeper adds 1 atmosphere of pressure. Down here, the environment compresses air, light, and life itself into extreme densities. 
          </p>
          <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-6 font-mono tracking-widest text-xs">
            <div className="space-y-1 opacity-40 uppercase">
              <span className="block">Surface</span>
              <span className="block text-white font-bold">1 ATM</span>
            </div>
            <div className="space-y-1 text-right text-teal-300 uppercase">
              <span className="block">Current</span>
              <span className="block font-bold">~20 ATM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
