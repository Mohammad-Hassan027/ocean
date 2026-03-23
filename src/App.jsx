import { useState } from 'react';
import FluidCursor from './components/FluidCursor';
import DepthCounter from './components/DepthCounter';
import SonarPulse from './components/SonarPulse';
import BackgroundOverlay from './components/BackgroundOverlay';
import SplineScene from './components/SplineScene';
import SectionWrapper from './components/SectionWrapper';

import HeroSurface from './sections/HeroSurface';
import TwilightZone from './sections/TwilightZone';
import MidnightZone from './sections/MidnightZone';
import AbyssalPlain from './sections/AbyssalPlain';
import MarianaTrench from './sections/MarianaTrench';

export default function App() {
  const [splineApp, setSplineApp] = useState(null);

  return (
    <>
      <FluidCursor />
      <DepthCounter />
      <SonarPulse />
      
      {/* Dynamic Background */}
      <BackgroundOverlay />

      {/* Global Sticky 3D Layer - Always behind text but above the background */}
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen opacity-90 transition-opacity duration-1000">
        <SplineScene onLoad={setSplineApp} />
      </div>

      <main className="relative z-10 w-full overflow-hidden">
        {/* We use SectionWrapper for SpaceEdu zoom effect on each section. */}
        <SectionWrapper>
          <HeroSurface />
        </SectionWrapper>
        
        <SectionWrapper>
          <TwilightZone />
        </SectionWrapper>
        
        <div id="midnight-trigger-zone">
          <SectionWrapper>
            <MidnightZone splineApp={splineApp} />
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
