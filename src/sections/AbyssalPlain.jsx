import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AbyssalPlain() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const graphicRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        end: "center center",
        scrub: 1
      }
    });

    tl.fromTo(textRef.current, 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 1 }
    )
    .fromTo(graphicRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen py-32 px-4 md:px-16 flex flex-col items-center justify-center border-t border-white/5"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div ref={textRef} className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-black text-purple-200 uppercase tracking-widest opacity-80 drop-shadow-lg">
            The Abyssal Plain
          </h2>
          <div className="h-1 w-24 bg-purple-500" />
          <p className="text-xl text-white/80 leading-relaxed">
            Spanning over 50% of the Earth's surface, the Abyssal Plain is a vast, flat landscape covered in centuries of marine snow.
          </p>
          <p className="text-lg text-white/60">
            Despite its extreme environment (temperatures near freezing and immense pressure), human impact reaches even here. Deep-sea mining and plastic pollution threaten this fragile ecosystem.
          </p>
        </div>

        <div ref={graphicRef} className="relative aspect-square md:aspect-auto md:h-96 flex items-center justify-center overflow-hidden rounded-full border-4 border-white/5 bg-gradient-to-tr from-black to-purple-900/40 opacity-80 mix-blend-screen p-8 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
          {/* Abstract representation of the abyssal plain */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-black to-black"></div>
          
          <div className="relative text-center z-10">
            <h3 className="text-2xl font-bold font-mono tracking-widest text-purple-300 opacity-50 mb-2">MARINE SNOW</h3>
            <div className="w-full flex justify-center space-x-1 mt-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s`, opacity: Math.random() }}></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
