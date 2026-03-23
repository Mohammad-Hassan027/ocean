import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TwilightZone() {
  const containerRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

  useEffect(() => {
    // Reveal animation
    gsap.fromTo(textLeftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: textLeftRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(textRightRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0, opacity: 1,
        scrollTrigger: {
          trigger: textRightRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-32 px-4 md:px-16"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        
        <div ref={textLeftRef} className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-blue-200 uppercase tracking-widest opacity-80">
            The Twilight Zone
          </h2>
          <div className="h-1 w-24 bg-blue-400" />
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed">
            As we pass 200 meters, sunlight rapidly fades. Photosynthesis is no longer possible. 
          </p>
          <p className="text-lg text-blue-200/60 font-mono tracking-wide">
            Depth: 200m - 1,000m
          </p>
        </div>

        <div ref={textRightRef} className="bg-black/20 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-2xl space-y-4">
          <h3 className="text-2xl font-bold text-white mb-4">Crushing Pressure</h3>
          <p className="text-white/80 leading-relaxed">
            For every 10 meters descended, the pressure increases by 1 atmosphere. Down here, the pressure is already over 20 times greater than at the surface. 
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 opacity-50 font-mono text-sm">
            <span>Surface Pressure: 1 atm</span>
            <span>Current: ~20 atm</span>
          </div>
        </div>

      </div>
    </section>
  );
}
