import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FluidCursor() {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.4, ease: "power3", force3D: true});
    const yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.4, ease: "power3", force3D: true});

    const mouseMove = (e) => {
      xTo(e.clientX - 12);
      yTo(e.clientY - 12);
    };

    window.addEventListener("mousemove", mouseMove);

    const colorTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Sunlight Yellow (#facc15) to Bioluminescent Teal (#2dd4bf) to Deep Sea Purple (#a855f7)
        let bgStyle = gsap.utils.interpolate("rgba(250, 204, 21, 0.5)", "rgba(45, 212, 191, 0.5)", Math.min(1, self.progress * 2));
        let shadowStyle = gsap.utils.interpolate("0 0 15px rgba(250, 204, 21, 0.6)", "0 0 25px rgba(45, 212, 191, 0.8)", Math.min(1, self.progress * 2));

        if (self.progress > 0.5) {
          const secondHalf = (self.progress - 0.5) * 2;
          bgStyle = gsap.utils.interpolate("rgba(45, 212, 191, 0.5)", "rgba(168, 85, 247, 0.4)", secondHalf);
          shadowStyle = gsap.utils.interpolate("0 0 25px rgba(45, 212, 191, 0.8)", "0 0 15px rgba(168, 85, 247, 0.5)", secondHalf);
        }

        if (cursorRef.current) {
          cursorRef.current.style.backgroundColor = bgStyle;
          cursorRef.current.style.boxShadow = shadowStyle;
        }
      }
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      colorTrigger.kill();
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-screen will-change-transform backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(250, 204, 21, 0.5)', boxShadow: '0 0 15px rgba(250, 204, 21, 0.6)' }}
    ></div>
  );
}
