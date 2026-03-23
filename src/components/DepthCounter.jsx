import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DepthCounter() {
  const depthRef = useRef(null);

  useEffect(() => {
    const maxDepth = 10935; 
    
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
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-1 bg-black/40 backdrop-blur-2xl border border-white/5 px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-none mix-blend-screen">
      <div className="flex items-center gap-2 mb-1">
         <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
         <span className="opacity-40 text-[9px] font-sans tracking-[0.3em] uppercase">Telemetry</span>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="opacity-30 text-[10px] tracking-[0.2em] font-mono">D_PTH</span>
        <span ref={depthRef} className="font-bold w-[80px] text-right text-white font-mono text-lg tracking-wider">0m</span>
      </div>
    </div>
  );
}
