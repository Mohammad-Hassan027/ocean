import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function SonarPulse() {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    // Only add pulses on desktop to avoid interfering with mobile taps
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleClick = (e) => {
      const id = Date.now();
      setPulses(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      
      setTimeout(() => {
        setPulses(prev => prev.filter(p => p.id !== id));
      }, 2000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {pulses.map(pulse => (
        <PulseCircle key={pulse.id} x={pulse.x} y={pulse.y} />
      ))}
    </>
  );
}

function PulseCircle({ x, y }) {
  const circleRef = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(circleRef.current, 
      { scale: 0, opacity: 0.6 }, 
      { scale: 3, opacity: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div 
      ref={circleRef}
      className="fixed pointer-events-none rounded-full border-2 border-teal-300/50 z-[9000] mix-blend-screen"
      style={{
        left: x - 50,
        top: y - 50,
        width: 100,
        height: 100,
      }}
    />
  );
}
