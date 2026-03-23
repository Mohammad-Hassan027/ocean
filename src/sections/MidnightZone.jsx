import { useRef, useState } from 'react';
import gsap from 'gsap';

const creatures = [
  { name: "Anglerfish", desc: "Uses a bioluminescent lure to attract prey in total darkness." },
  { name: "Vampire Squid", desc: "Turns inside out and exposes spiny tentacles when threatened." },
  { name: "Giant Squid", desc: "A massive, elusive predator with eyes the size of basketballs." }
];

function TiltCard({ creature }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    gsap.to(card, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out"
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-80 flex flex-col justify-end overflow-hidden cursor-crosshair will-change-transform pointer-events-auto"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative z-10 transition-transform duration-500 group-hover:translate-z-10 md:group-hover:-translate-y-2" style={{ transform: "translateZ(30px)" }}>
        <h4 className="text-2xl font-bold text-teal-300 mb-2 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">{creature.name}</h4>
        <p className="text-white/70 text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          {creature.desc}
        </p>
      </div>
      <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-500 blur-xl pointer-events-none" />
    </div>
  );
}

export default function MidnightZone() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Bio-Pulse interaction
  const triggerBioPulse = () => {
    setShowTooltip(true);
    // Auto-hide tooltip after 4 seconds
    setTimeout(() => setShowTooltip(false), 4000);
  };

  return (
    <section className="w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center pointer-events-none">
      <div className="max-w-6xl w-full mx-auto text-center mb-16 z-10 pointer-events-auto">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest opacity-80 mb-6 drop-shadow-lg">
          The Midnight Zone
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8 font-light">
          No sunlight reaches these depths. The only light comes from bioluminescence. Scroll to rotate the specimen, or scan to reveal anomalies.
        </p>

        <button 
          onClick={triggerBioPulse}
          className="group relative inline-flex items-center justify-center px-8 py-3 font-mono font-bold text-teal-300 bg-teal-900/20 backdrop-blur-md border border-teal-500/30 rounded-full hover:bg-teal-800/40 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
        >
          INITIATE BIO-PULSE
          <div className="absolute inset-0 bg-teal-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      <div className={`absolute top-[40%] md:top-[50%] right-[10%] md:right-[20%] max-w-xs transition-opacity duration-700 pointer-events-none z-10 ${showTooltip ? 'opacity-100 -translate-y-4' : 'opacity-0 translate-y-0'}`}>
        <div className="bg-black/60 backdrop-blur-xl border border-teal-500/40 p-6 rounded-2xl shadow-[0_0_30px_rgba(45,212,191,0.3)]">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-2 w-2 bg-teal-400 rounded-full animate-pulse" />
            <h4 className="font-mono text-teal-300 font-bold tracking-widest text-sm">BIO-LUMINESCENT NODE</h4>
          </div>
          <p className="text-white/80 font-light text-sm leading-relaxed">
            Specialized photophores emit pale blue light to counter-illuminate the body against the faint downwelling light, masking its silhouette from predators swimming below.
          </p>
        </div>
        <div className="absolute top-1/2 -left-16 w-16 h-px bg-teal-500/50" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 w-full max-w-6xl mx-auto z-10 pointer-events-none" style={{ perspective: "1000px" }}>
        {creatures.map((c, i) => (
          <TiltCard key={i} creature={c} />
        ))}
      </div>
    </section>
  );
}
