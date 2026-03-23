import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import MagneticButton from '../components/MagneticButton';

gsap.registerPlugin(ScrollToPlugin);

export default function HeroSurface() {
  const scrollToNext = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: window.innerHeight,
      ease: "power3.inOut"
    });
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-screen opacity-10 pointer-events-none" />
      
      <div className="text-center z-10 max-w-5xl mx-auto w-full relative pt-20">
        
        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8">
           <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
           <span className="font-mono text-white/70 text-xs tracking-[0.2em] uppercase">R/V Nautilus — Lat: 11.3493° N</span>
        </div>

        <h1 className="text-5xl md:text-[6rem] font-bold text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-8 uppercase tracking-tighter leading-none">
          THE LAST<br/>FRONTIER
        </h1>
        
        <div className="bg-black/40 backdrop-blur-3xl border-l-[3px] border-teal-500 p-8 md:p-12 mb-16 max-w-3xl mx-auto text-left shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <p className="text-xl md:text-3xl text-white/90 font-light tracking-wide leading-relaxed relative z-10">
            You are standing on the deck. Look down. <br/><br/>
            <span className="text-teal-400 font-bold">71%</span> of our world is hidden beneath the waves. Take the plunge into the silent caves of the deep.
          </p>
        </div>
        
        <MagneticButton 
          onClick={scrollToNext}
          className="group inline-flex flex-col items-center justify-center px-10 py-6 font-mono font-bold text-teal-300 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white/15 hover:border-teal-500/50 transition-all duration-500 pointer-events-auto shadow-[0_0_30px_rgba(45,212,191,0.1)]"
        >
          <span>INITIATE DIVE</span>
          <span className="text-[10px] text-white/40 mt-1 uppercase tracking-widest font-sans">0 Meters</span>
          <div className="absolute inset-0 bg-teal-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </MagneticButton>
      </div>
    </section>
  );
}
