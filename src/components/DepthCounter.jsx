import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DepthCounter() {
  const depthRef = useRef(null);

  useEffect(() => {
    const maxDepth = 11000; // Mariana Trench depth
    
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Linear mapping from scroll progress to depth
        const depth = Math.round(self.progress * maxDepth);
        if (depthRef.current) {
          depthRef.current.innerText = `${depth.toLocaleString()}m`;
        }
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white/90 font-mono text-xs md:text-sm tracking-wider shadow-lg">
      <span className="opacity-80">Depth:</span>
      <span ref={depthRef} className="font-bold w-16 text-right">0m</span>
    </div>
  );
}
