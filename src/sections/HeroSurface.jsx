import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSurface() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Floating animation for button
    gsap.to(buttonRef.current, {
      y: -15,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut"
    });

    // Parallax effect on scroll
    gsap.to(textRef.current, {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div 
        ref={textRef} 
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-lg mb-6 uppercase tracking-tight">
          Ocean Depths
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow-md">
          A Journey to the Mariana Trench
        </p>
        
        <button 
          ref={buttonRef}
          onClick={scrollToNext}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-blue-600/50 backdrop-blur-md border border-white/20 rounded-full hover:bg-blue-600/80 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
        >
          Begin Descent
          <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Sun rays effect */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white/20 to-transparent pointer-events-none mix-blend-overlay" />
    </section>
  );
}
