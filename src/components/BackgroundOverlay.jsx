import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundOverlay() {
  const bgRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const color = gsap.utils.interpolate("#020617", "#000000", self.progress);
        if (bgRef.current) {
          bgRef.current.style.backgroundColor = color;
        }
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      <div 
        ref={bgRef} 
        className="fixed inset-0 -z-20 pointer-events-none bg-[#020617]"
      />
      {/* Film Grain Noise Overlay */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
    </>
  );
}
