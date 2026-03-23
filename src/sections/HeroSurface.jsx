import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSurface() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Map letter-spacing to scroll depth for the 'expanding pressure' feel
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (titleRef.current) {
          // Increase tracking dramatically across the journey
          const spacing = gsap.utils.interpolate(0.1, 1.5, self.progress);
          titleRef.current.style.letterSpacing = `${spacing}em`;
          titleRef.current.style.marginLeft = `${spacing}em`; // Offset the weird centering of letter-spacing
        }
      }
    });

    return () => trigger.kill();
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center z-10 max-w-4xl mx-auto w-full relative">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-[8rem] font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] mb-12 uppercase"
          style={{ letterSpacing: '0.1em', transition: 'letter-spacing 0.1s ease-out' }}
        >
          THE ABYSS
        </h1>
        
        <div className="bg-black/10 backdrop-blur-2xl border border-white/5 p-8 rounded-3xl mb-16 max-w-2xl mx-auto">
          <p className="text-lg md:text-2xl text-teal-100/80 font-mono tracking-widest leading-relaxed">
             A ZERO-GRAVITY DESCENT INTO THE UNKNOWN.
          </p>
        </div>
        
        <MagneticButton 
          onClick={scrollToNext}
          className="group inline-flex items-center justify-center px-10 py-5 font-mono font-bold text-white bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300 pointer-events-auto"
        >
          INITIATE DESCENT
          <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </MagneticButton>
      </div>
    </section>
  );
}
