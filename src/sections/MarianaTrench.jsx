import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function MarianaTrench() {
  const sectionRef = useRef(null);
  const [pledged, setPledged] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top center",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to('.ui-element', { opacity: 0, duration: 1, ease: 'power2.out' });
      },
      onLeaveBack: () => {
        gsap.to('.ui-element', { opacity: 1, duration: 1, ease: 'power2.in' });
      }
    });

    return () => trigger.kill();
  }, []);

  const handleAscend = () => {
    gsap.to(window, {
      duration: 3.5, // Slow ascent
      scrollTo: 0,
      ease: "power2.inOut"
    });
  };

  return (
    <section ref={sectionRef} className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center overflow-hidden bg-[#000000] z-50">
      <div className="relative z-10 max-w-4xl text-center space-y-12 px-6">
        
        <p className="font-mono text-teal-800/80 tracking-[0.5em] text-xs md:text-sm mb-8 uppercase">
          Depth_Recorded: 10,935m
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tighter drop-shadow-2xl">
          A MOTION FOR<br/>THE OCEAN
        </h2>
        
        <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-sans font-light max-w-2xl mx-auto">
          The dive is over, but the stewardship begins. The deep sea is our planet's life support system, and it is under threat from deep-sea mining and plastic pollution.
        </p>
        <p className="text-2xl font-serif text-teal-100/90 italic drop-shadow-md">
          "The ocean protects us. Now it’s our turn."
        </p>

        <div className="pt-12 flex flex-col items-center gap-8 relative">
          
          <AnimatePresence>
            {!pledged ? (
              <motion.button 
                key="pledge-btn"
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                onClick={() => setPledged(true)}
                className="group relative inline-flex items-center justify-center px-10 py-5 font-mono font-bold text-black bg-teal-400 rounded-full hover:bg-teal-300 transition-colors duration-300 shadow-[0_0_40px_rgba(45,212,191,0.4)] z-20 pointer-events-auto"
              >
                JOIN THE 30x30 PLEDGE
                {/* Ripple Effect Layer */}
                <div className="absolute inset-0 rounded-full border-2 border-teal-400 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50" />
              </motion.button>
            ) : (
              <motion.div 
                key="thank-you"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-teal-900/30 border border-teal-500/50 px-8 py-6 rounded-3xl font-mono text-teal-200 text-sm tracking-widest uppercase shadow-[0_0_50px_rgba(45,212,191,0.2)]"
              >
                Pledge Registered. The Ocean Thanks You.
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-white/30 text-xs font-mono tracking-widest max-w-md mx-auto">
             * Supporting the goal to strictly protect 30% of the global ocean by the year 2030, and reduce single-use plastics.
          </p>
        </div>

        <button 
          onClick={handleAscend}
          className="mt-32 w-20 h-20 rounded-full border border-white/20 flex flex-col items-center justify-center mx-auto hover:bg-white/10 transition-colors duration-700 hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.05)] pointer-events-auto group"
        >
          <span className="block w-px h-8 bg-white/50 mb-2 group-hover:-translate-y-2 transition-transform duration-500" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-500">ASCEND</span>
        </button>

      </div>
    </section>
  );
}
