/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AbyssalPlain() {
  const [showTaxonomy, setShowTaxonomy] = useState(false);

  return (
    <section className="w-full min-h-[120vh] py-32 px-4 md:px-16 flex flex-col items-center justify-center relative bg-[#010308]">
      
      {/* Absolute CSS Animated "Sassy Sparkler" Polychaete Worm looping in background */}
      <div className="absolute top-[20%] right-[10%] w-64 h-64 mix-blend-screen opacity-20 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_30s_linear_infinite]">
           {/* An iridescent undulating glowing path */}
           <path d="M 10 100 C 50 20, 150 20, 190 100 C 150 180, 50 180, 10 100" fill="transparent" stroke="url(#sparkle)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 20" className="animate-[pulse_2s_ease-in-out_infinite]" />
           <defs>
             <linearGradient id="sparkle" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#2dd4bf" />
               <stop offset="50%" stopColor="#818cf8" />
               <stop offset="100%" stopColor="#e879f9" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 bg-indigo-900/30 border border-indigo-500/30 px-5 py-2 rounded-full mb-4">
             <span className="font-mono text-indigo-300 text-[10px] tracking-[0.3em] uppercase">4,000m — 11,000m</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl leading-none">
              THE GHOST IN<br/>THE MACHINE
            </h2>
          </motion.div>
          
          <div className="h-px w-24 bg-indigo-500/50" />
          
          <p className="text-xl text-white/60 leading-relaxed font-sans font-light">
            We expected a void. Instead, we found a geological battery—and a tragic footprint of our own making. 
          </p>
          <p className="text-lg text-white/40 leading-relaxed font-sans font-light border-l-2 border-indigo-500/30 pl-4">
            In 2024, scientists discovered <strong className="text-indigo-300">"Dark Oxygen"</strong>: ancient polymetallic nodules on the seafloor producing oxygen without sunlight, acting as natural geobatteries splitting seawater.
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-3xl border border-white/5 shadow-2xl rounded-2xl">
          <h3 className="text-2xl font-bold text-white/80 mb-6 uppercase tracking-widest text-center font-sans">
             Specimen Recovery
          </h3>
          <p className="text-center text-white/40 font-mono text-xs mb-8">
            Recovered at 6,900 meters. A species never before seen by human eyes.
          </p>

          <button 
            onClick={() => setShowTaxonomy(true)}
            className="group relative inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-red-400 bg-red-900/20 border border-red-500/30 hover:bg-red-800/40 transition-all duration-300 shadow-[0_0_20px_rgba(248,113,113,0.1)]"
          >
            PULL TAXONOMIC RECORD
            <div className="absolute inset-0 bg-red-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

      </div>

      {/* Visceral Modal: The PET Fiber Truth */}
      <AnimatePresence>
        {showTaxonomy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0a0a0a] border border-white/10 max-w-2xl w-full p-8 md:p-12 shadow-2xl relative"
            >
              <button onClick={() => setShowTaxonomy(false)} className="absolute top-6 right-6 text-white/40 hover:text-white font-mono text-xs">CLOSE [X]</button>
              
              <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-8">
                 <div className="w-16 h-16 bg-white/5 flex items-center justify-center font-mono text-white/20 text-xs text-center border border-white/10">IMG_REDACTED</div>
                 <div>
                   <h4 className="text-xl font-bold text-white uppercase tracking-wider">Eurythenes plasticus</h4>
                   <p className="font-mono text-xs text-white/40">IDENTIFIED: 2020 | DEPTH: 6,900M</p>
                 </div>
              </div>

              <div className="space-y-6 text-white/80 font-serif leading-relaxed text-lg">
                <p>
                  A new species of amphipod was discovered in the Mariana Trench. It was a monumental achievement for deep-sea biology.
                </p>
                <div className="bg-red-900/10 border-l-2 border-red-500 p-4">
                  <p className="text-red-200">
                    Inside its hindgut, researchers found a microplastic fiber <strong className="text-red-400 font-mono tracking-widest text-sm bg-red-500/10 px-1">0.65mm</strong> long. It was 83% identical to polyethylene terephthalate (PET) — the plastic used in water bottles.
                  </p>
                </div>
                <p>
                  We named it <em>Eurythenes plasticus</em> because even in the deepest, most isolated environment on Earth, our trash had arrived before our scientists did.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
