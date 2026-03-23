import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DepthCounter() {
  const depthRef = useRef(null);

  useEffect(() => {
    const maxDepth = 10935; // Challenger Deep narrative depth
    
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const depth = Math.round(self.progress * maxDepth);
        if (depthRef.current) {
          depthRef.current.innerText = `${depth.toLocaleString()}m`;
        }
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-black/20 backdrop-blur-[12px] border border-white/10 px-6 py-3 rounded-full text-white/90 font-mono text-sm tracking-wider shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <span className="opacity-40 text-xs tracking-[0.2em] uppercase">Depth</span>
      <span ref={depthRef} className="font-bold w-[72px] text-right text-teal-100/90">0m</span>
    </div>
  );
}
