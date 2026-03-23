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
        const color = gsap.utils.interpolate("#add8e6", "#00050a", self.progress);
        if (bgRef.current) {
          bgRef.current.style.backgroundColor = color;
        }
      }
    });

    return () => trigger.kill();
  }, []);

  return (
    <div 
      ref={bgRef} 
      className="fixed inset-0 -z-10 pointer-events-none bg-[#add8e6]"
    />
  );
}
