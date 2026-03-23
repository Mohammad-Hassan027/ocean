import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MidnightZone() {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  useEffect(() => {
    const handleMouse = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate relative to the section
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x: `${x}px`, y: `${y}px` });
      }
    };
    
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[120vh] py-32 overflow-hidden bg-black text-white">
      
      {/* Submersible Spotlight Mask Overlay */}
      {/* This renders pure black everywhere EXCEPT the 300px circle around the mouse */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle 250px at ${mousePos.x} ${mousePos.y}, transparent 0%, rgba(0,0,0,0.95) 80%, black 100%)`
        }}
      />
      
      {/* Base Content (Only visible through the spotlight) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 h-full flex flex-col pointer-events-auto">
        
        <div className="max-w-3xl mb-32">
          <div className="inline-flex items-center gap-3 border border-white/20 px-4 py-2 rounded-full mb-6">
             <div className="w-2 h-2 bg-yellow-500 rounded-full animate-blink" />
             <span className="font-mono text-white/50 text-[10px] tracking-[0.2em] uppercase">Depth 1,000m — 4,000m</span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-5xl md:text-7xl font-sans font-black uppercase tracking-tighter leading-[0.9] text-teal-50 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            SELF-GENERATED<br/>LIGHT
          </motion.h2>
          
          <p className="mt-8 text-xl text-teal-100/60 font-serif italic max-w-2xl leading-relaxed">
            "In eternal darkness, evolution creates its own stars."
          </p>
          <p className="mt-6 text-lg text-white/40 font-sans font-light max-w-2xl leading-relaxed">
            Welcome to the Bathypelagic. Sunlight is extinct. The only light here is the light you bring—or the light that hunts you.
          </p>
        </div>

        {/* Hidden Bioluminescent Creatures / Data scattered around */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 relative">
          
          <div className="p-8 border-l border-teal-500/30">
            <h3 className="text-3xl font-bold text-teal-400 mb-4">5,850 P.S.I.</h3>
            <p className="text-white/50 text-sm leading-relaxed font-mono tracking-wider">
              At 4,000 meters, the ambient pressure reaches almost 6,000 pounds per square inch. This is enough compression to instantly crush almost any standard terrestrial vessel. Yet, soft-bodied organisms thrive.
            </p>
          </div>

          <div className="p-8 border-r border-teal-400 text-right md:-mt-16">
            <h3 className="text-3xl font-bold text-teal-200 mb-4">Bioluminescent Lures</h3>
            <p className="text-white/50 text-sm leading-relaxed font-mono tracking-wider">
              Over 90% of species at this depth utilize light-producing organs (photophores). They flash to attract mates, blind predators, or lure prey directly into their jaws.
            </p>
          </div>

        </div>
        
        {/* Hidden UI hint outside the spotlight focus */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/20 tracking-widest text-center">
          USE SPOTLIGHT TO SEARCH THE PERIMETER
        </div>

      </div>
    </section>
  );
}
