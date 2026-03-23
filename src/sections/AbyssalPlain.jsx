import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function AbyssalPlain() {
  const textContainerRef = useRef(null);
  const filterWrapperRef = useRef(null);

  useEffect(() => {
    // Chromatic Aberration & Lens Stress mapped to extreme depths (Abyssal Zone)
    const trigger = ScrollTrigger.create({
      trigger: textContainerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (filterWrapperRef.current) {
          // Intense Chromatic Aberration as you scroll through the section
          // Use drop-shadow sparingly, max 6px deviation
          const intensity = Math.sin(self.progress * Math.PI) * 6;
          filterWrapperRef.current.style.filter = `drop-shadow(${intensity}px 0 rgba(255,0,0,0.4)) drop-shadow(${-intensity}px 0 rgba(0,255,255,0.4))`;
        }
      }
    });

    const glitchTrigger = ScrollTrigger.create({
      trigger: textContainerRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(textContainerRef.current, {
          x: "random(-10, 10, 1)",
          y: "random(-4, 4, 1)",
          skewX: "random(-5, 5)",
          duration: 0.05,
          repeat: 15,
          yoyo: true,
          ease: "none",
          onComplete: () => {
             gsap.set(textContainerRef.current, { x: 0, y: 0, skewX: 0 });
          }
        });
      }
    });

    return () => {
      trigger.kill();
      glitchTrigger.kill();
    };
  }, []);

  return (
    <section className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center">
      
      {/* Wrapper using will-change filter to safely apply Chromatic Aberration */}
      <div ref={filterWrapperRef} className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 pointer-events-none will-change-[filter] transition-all duration-75">
        
        <div ref={textContainerRef} className="space-y-8">
          <div className="inline-flex items-center gap-4 bg-red-900/10 border border-red-500/20 px-6 py-2 rounded-none mb-4 backdrop-blur-xl">
             <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
             <span className="font-mono text-red-500 text-[10px] tracking-[0.4em] uppercase font-bold">Structural Stress Critical</span>
          </div>

          {/* Kinetic Skew Heading */}
          <motion.div
            initial={{ opacity: 0, rotateX: -45, y: 100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, margin: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl mix-blend-screen leading-none">
              ABYSSAL<br/>PLAIN
            </h2>
          </motion.div>
          
          <div className="h-px w-32 bg-white/20" />
          
          <p className="text-xl text-white/50 leading-relaxed font-sans font-light">
            4,000 meters. The immense pressure compresses the submersible's hull, resulting in auditory stress pops and micro-structural fracturing.
          </p>
        </div>

        {/* Abstract Luxury Visual Block */}
        <div className="relative aspect-square md:h-[500px] flex justify-end flex-col overflow-hidden bg-black/80 backdrop-blur-3xl border-l-4 border-white/10 p-12 shadow-2xl pointer-events-none mix-blend-screen will-change-transform">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative z-10 w-full font-mono">
            <h3 className="text-3xl font-bold tracking-[0.2em] text-white/40 mb-6 uppercase">Environment</h3>
            <div className="space-y-4 border-t border-white/5 pt-6">
              <div className="flex justify-between text-xs text-white/30 tracking-widest"><span className="uppercase">Temp</span><span className="text-teal-500">2°C</span></div>
              <div className="flex justify-between text-xs text-white/30 tracking-widest"><span className="uppercase">Pressure</span><span className="text-red-500">400 ATM</span></div>
              <div className="flex justify-between text-xs text-white/30 tracking-widest"><span className="uppercase">Light</span><span className="text-white">0.00%</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
