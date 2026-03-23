import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const bentoData = [
  { 
    title: "BIOLUMINESCENCE", 
    desc: "A chemical reaction producing localized cold light. Organisms rely on Luciferin oxidization for survival communication.", 
    class: "md:col-span-2 md:row-span-2 flex flex-col justify-end" 
  },
  { 
    title: "VAMPIRE SQUID", 
    desc: "Vampyroteuthis infernalis. Reverses its mantle to expose threatening arm spines.", 
    class: "md:col-span-1 md:row-span-1 flex flex-col justify-center" 
  },
  { 
    title: "ABYSSAL GIGANTISM", 
    desc: "Deep-sea isolation leads to extreme evolutionary scaling sizes.", 
    class: "md:col-span-1 md:row-span-2 flex flex-col justify-start" 
  },
  { 
    title: "ANGLER LURE", 
    desc: "The escal light organ mimics floating debris.", 
    class: "md:col-span-1 md:row-span-1 flex flex-col justify-end" 
  }
];

export default function MidnightZone() {
  const [showTooltip, setShowTooltip] = useState(false);

  const triggerBioPulse = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 4000);
  };

  return (
    <section className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center pointer-events-none relative z-10 w-full">
      <div className="max-w-6xl w-full mx-auto text-center mb-16 z-10 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50, skewY: 5 }}
          whileInView={{ opacity: 1, y: 0, skewY: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-widest opacity-90 mb-6 drop-shadow-[0_0_40px_rgba(45,212,191,0.3)]">
            The Midnight Zone
          </h2>
        </motion.div>
        <p className="text-xl text-teal-100/50 max-w-2xl mx-auto mb-12 font-mono tracking-widest uppercase text-sm">
          Absence of photons. Sensory deprivation.
        </p>

        <MagneticButton 
          onClick={triggerBioPulse}
          className="group inline-flex items-center justify-center px-10 py-4 font-mono font-bold text-teal-300 bg-black/40 backdrop-blur-3xl border border-teal-500/20 rounded-full hover:bg-white/5 transition-all duration-500 shadow-[0_0_30px_rgba(45,212,191,0.1)] hover:shadow-[0_0_50px_rgba(45,212,191,0.3)]"
        >
          INITIATE BIO-PULSE
          <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </MagneticButton>
      </div>

      <div className={`absolute top-[60%] md:top-[40%] right-[5%] md:right-[15%] max-w-xs transition-opacity duration-700 pointer-events-none z-20 ${showTooltip ? 'opacity-100 -translate-y-4' : 'opacity-0 translate-y-0'}`}>
        <div className="bg-black/80 backdrop-blur-3xl border border-teal-500/30 p-6 shadow-[0_0_50px_rgba(45,212,191,0.2)]">
          <div className="flex items-center gap-3 mb-4 border-b border-teal-500/20 pb-4">
            <div className="h-2 w-2 bg-teal-400 rounded-full animate-pulse" />
            <h4 className="font-mono text-teal-300 font-bold tracking-[0.2em] text-xs">BIO-NODE ACTIVE</h4>
          </div>
          <p className="text-white/60 font-mono text-xs leading-relaxed tracking-wider uppercase">
            Photophores emitting localized light to counter-illuminate the silhouette. Predator evasion successful.
          </p>
        </div>
      </div>

      {/* Luxury Bento Box Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-full max-w-7xl mx-auto z-10 h-[800px] md:h-[600px] pointer-events-auto">
        {bentoData.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-5%" }}
            transition={{ duration: i * 0.2 + 0.5, ease: "easeOut" }}
            className={`group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-700 ${item.class}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-xl md:text-3xl font-bold text-teal-100/80 mb-4 font-sans tracking-wide">{item.title}</h3>
              <p className="text-white/50 font-mono text-xs leading-relaxed tracking-widest uppercase">
                {item.desc}
              </p>
            </div>
            <div className="absolute top-0 right-0 p-4 font-mono text-white/10 text-6xl font-black group-hover:text-teal-500/10 transition-colors duration-700 pointer-events-none">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
