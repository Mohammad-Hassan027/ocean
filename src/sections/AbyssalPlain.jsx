import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AbyssalPlain() {
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Hull stress simulation at 4000m
    const trigger = ScrollTrigger.create({
      trigger: textContainerRef.current,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        // Severe Glitch effect on text container simulating hull stress
        gsap.to(textContainerRef.current, {
          x: "random(-10, 10, 1)",
          y: "random(-4, 4, 1)",
          skewX: "random(-5, 5)",
          duration: 0.05,
          repeat: 15,
          yoyo: true,
          ease: "none",
          onComplete: () => {
             // Settle back to normal
             gsap.set(textContainerRef.current, { x: 0, y: 0, skewX: 0 });
          }
        });
        
        // Subtle full screen shake
        gsap.to(document.body, {
          x: "random(-3, 3)",
          duration: 0.05,
          repeat: 15,
          yoyo: true,
          onComplete: () => {
             gsap.set(document.body, { x: 0 });
          }
        });
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <section className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10 pointer-events-none">
        
        <div ref={textContainerRef} className="space-y-6">
          <div className="inline-flex items-center gap-4 bg-red-900/20 border border-red-500/30 px-4 py-1.5 rounded-full mb-4 opacity-80">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
             <span className="font-mono text-red-400 text-xs tracking-[0.2em]">HULL STRESS WARNING</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white/90 uppercase tracking-widest drop-shadow-lg">
            The Abyssal Plain
          </h2>
          <div className="h-1 w-24 bg-white/20" />
          <p className="text-xl text-white/70 leading-relaxed font-light">
            4,000 meters. The immense pressure compresses the submersible's hull, resulting in auditory stress pops and micro-structural fracturing.
          </p>
          <p className="text-lg font-mono text-white/40 tracking-wider">
            Total darkness. Only the glow of marine snow illuminates the descent.
          </p>
        </div>

        <div className="relative aspect-square md:h-96 flex items-center justify-center overflow-hidden rounded-full border border-white/5 bg-black/60 opacity-80 mix-blend-screen p-8 shadow-[inset_0_0_100px_rgba(0,0,0,1)] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black"></div>
          
          <div className="relative text-center z-10">
            <h3 className="text-2xl font-bold font-mono tracking-widest text-white/30 mb-2">MARINE SNOW</h3>
            <div className="w-full flex justify-center space-x-1 mt-4">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-[2px] h-[2px] bg-white/60 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s`, opacity: Math.random() }}></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
