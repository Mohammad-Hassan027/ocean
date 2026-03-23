import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function FluidCursor() {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    // Check if it's a touch device to disable fluid cursor
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(cursorRef.current, "x", {duration: 0.4, ease: "power3"});
    const yTo = gsap.quickTo(cursorRef.current, "y", {duration: 0.4, ease: "power3"});

    const mouseMove = (e) => {
      // Offset by half width/height
      xTo(e.clientX - 12);
      yTo(e.clientY - 12);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="hidden md:block fixed top-0 left-0 w-6 h-6 bg-white/30 backdrop-blur-md rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_rgba(255,255,255,0.5)] will-change-transform"
    ></div>
  );
}
