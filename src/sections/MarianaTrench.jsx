import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MarianaTrench() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, scale: 0.9, y: 50 },
      {
        opacity: 1, scale: 1, y: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 2
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-80 pointer-events-none" />
      
      <div ref={textRef} className="relative z-10 max-w-4xl text-center space-y-8">
        <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 uppercase tracking-tighter drop-shadow-2xl">
          Challenger Deep
        </h2>
        <div className="h-0.5 w-32 bg-white/20 mx-auto" />
        <p className="text-xl md:text-3xl font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
          10,984 meters below the surface.
        </p>
        <p className="text-lg md:text-xl text-white/50">
          The deepest point on Earth. A place of total darkness, freezing temperatures, and crushing pressure. Yet, life still endures.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-12 group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30"
        >
          Return to Surface
        </button>
      </div>
    </section>
  );
}
