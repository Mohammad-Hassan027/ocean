import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function OxygenBubble({ delay, x, size }) {
  const [popped, setPopped] = useState(false);

  if (popped) {
    return (
      <div 
        className="absolute z-30 transition-all duration-500"
        style={{ left: `${x}%`, animation: `rise 15s infinite linear ${delay}s` }}
      >
        <div className="bg-teal-900/60 backdrop-blur-md border border-teal-500/40 p-3 rounded-lg text-xs font-mono text-teal-100 w-48 shadow-[0_0_15px_rgba(45,212,191,0.3)] animate-[fadeOut_4s_forwards]">
          Marine plankton generate 50% of the world's oxygen.
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute cursor-crosshair z-20 group hover:scale-110 transition-transform"
      style={{ left: `${x}%`, animation: `rise 15s infinite linear ${delay}s` }}
      onClick={() => setPopped(true)}
      onMouseEnter={() => setPopped(true)}
    >
      <div 
        className="rounded-full border border-white/30 bg-white/5 backdrop-blur-[2px] shadow-[inset_0_0_10px_rgba(255,255,255,0.2)] group-hover:bg-teal-400/20 group-hover:border-teal-400"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

export default function TwilightZone() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax mapping for silhouettes
  const turtleX = useTransform(scrollYProgress, [0, 1], ["-20%", "120%"]);
  const whaleX = useTransform(scrollYProgress, [0, 1], ["120%", "-20%"]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-4 md:px-16 overflow-hidden">
      
      {/* CSS Keyframes injected inline strictly for the bubbles */}
      <style>{`
        @keyframes rise {
          0% { bottom: -10%; transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateX(20px); }
          90% { opacity: 1; }
          100% { bottom: 110%; transform: translateX(-20px); opacity: 0; }
        }
        @keyframes fadeOut {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>

      {/* Parallax Silhouettes */}
      <motion.div 
        className="absolute top-[20%] w-64 h-32 opacity-10 pointer-events-none z-0 mix-blend-screen"
        style={{ left: turtleX }}
      >
        <svg viewBox="0 0 100 50" fill="white"><path d="M80,25 C80,35 60,45 40,40 C20,35 10,25 20,15 C30,5 60,5 80,25 Z M85,25 L95,20 L95,30 Z M20,15 L10,10 L15,20 Z" /></svg>
      </motion.div>

      <motion.div 
        className="absolute bottom-[20%] w-96 h-48 opacity-[0.05] pointer-events-none z-0 mix-blend-screen"
        style={{ left: whaleX, transform: 'scaleX(-1)' }}
      >
        <svg viewBox="0 0 100 50" fill="white"><path d="M10,25 C10,35 40,45 70,40 C90,35 100,25 90,15 C70,5 40,5 10,25 Z M5,25 L-5,15 L-5,35 Z M90,15 L95,10 L85,15 Z" /></svg>
      </motion.div>

      {/* Floating Oxygen Bubbles Array */}
      {[...Array(6)].map((_, i) => (
         <OxygenBubble key={i} delay={i * 2.5} x={15 + Math.random() * 70} size={30 + Math.random() * 40} />
      ))}

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16 items-center z-10 mix-blend-screen relative pointer-events-none">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false, margin: "-10%" }}
           transition={{ duration: 1, ease: "easeOut" }} 
           className="space-y-8"
        >
          <div className="inline-flex items-center gap-4 bg-teal-900/20 border border-teal-500/30 px-4 py-1.5 rounded-full mb-4">
             <span className="font-mono text-teal-400 text-xs tracking-[0.2em] uppercase">0m — 200m</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl leading-none">
            BREATH OF<br/>THE SEA
          </h2>
          <div className="h-px w-32 bg-white/20" />
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-sans font-light">
            In the Epipelagic zone, life is powered by the sun. <br/><br/>
            <span className="text-white/90">Breathe in. Breathe out.</span> Every second breath you take is a direct gift from this layer.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="bg-black/40 backdrop-blur-3xl border border-white/10 p-10 shadow-2xl space-y-8"
        >
          <h3 className="text-xl font-mono font-bold text-teal-300 tracking-[0.2em] uppercase">Marine Resilience</h3>
          <p className="text-white/70 leading-relaxed font-sans font-light">
            The ocean acts as our planet's lungs and global thermostat. It absorbs <span className="font-bold text-white">90%</span> of the atmosphere's excess heat and massive quantities of our anthropogenic CO2.
          </p>
          <div className="bg-white/5 p-4 rounded border-l-2 border-teal-500 font-mono text-xs text-white/40 tracking-wider">
             POP THE BUBBLES FLOATING UPWARD TO HARVEST DATA.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
