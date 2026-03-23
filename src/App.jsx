import { useState, useEffect, Suspense, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

import FluidCursor from './components/FluidCursor';
import DepthCounter from './components/DepthCounter';
import SonarPulse from './components/SonarPulse';
import BackgroundOverlay from './components/BackgroundOverlay';
import SectionWrapper from './components/SectionWrapper';

import HeroSurface from './sections/HeroSurface';
import TwilightZone from './sections/TwilightZone';
import MidnightZone from './sections/MidnightZone';
import AbyssalPlain from './sections/AbyssalPlain';
import MarianaTrench from './sections/MarianaTrench';

gsap.registerPlugin(ScrollTrigger);

const SplineScene = lazy(() => import('./components/SplineScene'));

function PressureGaugeLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-[9000] bg-black">
      <div className="flex flex-col items-center max-w-xs w-full px-6">
        <div className="w-full flex justify-between font-mono text-teal-400 text-xs mb-3 tracking-widest uppercase">
          <span>Hull Pressure</span>
          <span className="animate-pulse opacity-80">Building</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden border border-white/5 relative">
           <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full animate-[pulse_2s_ease-in-out_infinite]" style={{ width: '60%' }} />
        </div>
        <span className="mt-5 font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">Depressurizing 3D Assets...</span>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="ui-element fixed left-4 md:left-8 top-1/4 bottom-1/4 w-1 bg-white/10 rounded-full z-[100] overflow-hidden hidden md:block border border-white/5 shadow-lg transition-opacity duration-1000">
      <div className="progress-bar-fill w-full h-full bg-gradient-to-b from-yellow-400 via-teal-500 to-purple-800 rounded-full origin-top" style={{ transform: 'scaleY(0)' }} />
    </div>
  );
}

function CinematicLetterbox() {
  const { scrollYProgress } = useScroll();
  const letterboxHeight = useTransform(scrollYProgress, [0, 1], ["0vh", "12vh"]);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 bg-black z-[9900] origin-top pointer-events-none"
        style={{ height: letterboxHeight }}
      />
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-black z-[9900] origin-bottom pointer-events-none"
        style={{ height: letterboxHeight }}
      />
    </>
  );
}

export default function App() {
  const [splineApp, setSplineApp] = useState(null);

  useEffect(() => {
    gsap.to('.progress-bar-fill', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.refresh());
  }, []);

  return (
    <>
      <div className="ui-element transition-opacity duration-1000">
        <FluidCursor />
      </div>
      <div className="ui-element transition-opacity duration-1000">
        <DepthCounter />
      </div>
      <div className="ui-element transition-opacity duration-1000">
        <SonarPulse />
      </div>
      <ProgressBar />
      
      <CinematicLetterbox />
      <BackgroundOverlay />

      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-90 transition-opacity duration-1000">
        <Suspense fallback={<PressureGaugeLoader />}>
          <SplineScene onLoad={setSplineApp} />
        </Suspense>
      </div>

      <main className="relative z-10 w-full overflow-hidden">
        <SectionWrapper>
          <HeroSurface />
        </SectionWrapper>
        
        <SectionWrapper>
          <TwilightZone />
        </SectionWrapper>
        
        <div id="midnight-trigger-zone">
          <SectionWrapper>
            <MidnightZone />
          </SectionWrapper>
        </div>
        
        <SectionWrapper>
          <AbyssalPlain />
        </SectionWrapper>
        
        <SectionWrapper>
          <MarianaTrench />
        </SectionWrapper>
      </main>
    </>
  );
}
