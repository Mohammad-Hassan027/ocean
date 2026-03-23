import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    // Ensure scroll is locked during loading
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }
    });

    tl.to(subRef.current, {
      y: 20,
      duration: 1.2,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut"
    })
    .to(subRef.current, {
      y: window.innerHeight + 200,
      duration: 1.5,
      ease: "power2.in"
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#add8e6]">
      <div ref={subRef} className="drop-shadow-2xl">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 32H88V20C88 15.5817 84.4183 12 80 12H72C67.5817 12 64 15.5817 64 20V32H40C17.9086 32 0 49.9086 0 72H104C108.418 72 112 68.4183 112 64C112 46.3269 97.6731 32 80 32H96Z" fill="#FBBF24"/>
          <circle cx="24" cy="52" r="8" fill="#1E3A8A" />
          <circle cx="56" cy="52" r="8" fill="#1E3A8A" />
          <path d="M120 48L112 56L120 64V48Z" fill="#F59E0B" />
        </svg>
      </div>
      <div className="mt-8 font-mono text-sm tracking-widest text-[#00050a]/60 uppercase">
        Descending...
      </div>
    </div>
  );
}
