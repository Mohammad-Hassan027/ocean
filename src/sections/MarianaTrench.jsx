import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarianaTrench() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fade out global UI as we reach the absolute bottom climax
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

  return (
    <section ref={sectionRef} className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center overflow-hidden bg-black pointer-events-none">
      <div className="relative z-10 max-w-4xl text-center space-y-12 px-6 pointer-events-auto">
        
        <p className="font-mono text-teal-800/80 tracking-[0.5em] text-xs md:text-sm mb-16 uppercase">
          Depth_Recorded: 10,935m
        </p>

        <h2 className="text-3xl md:text-5xl font-light text-white/90 leading-relaxed font-sans mix-blend-screen drop-shadow-2xl selection:bg-white selection:text-black">
          "At 10,935 meters, we don't find monsters; we find a silence that has lasted for eons."
        </h2>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-32 w-16 h-16 rounded-full border border-white/20 flex flex-col items-center justify-center mx-auto hover:bg-white/10 transition-colors duration-500 hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <span className="block w-px h-6 bg-white/50 mb-1" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-white/50">UP</span>
        </button>

      </div>
    </section>
  );
}
