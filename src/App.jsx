import { useState } from 'react';
import FluidCursor from './components/FluidCursor';
import DepthCounter from './components/DepthCounter';
import SonarPulse from './components/SonarPulse';
import BackgroundOverlay from './components/BackgroundOverlay';
import LoadingScreen from './components/LoadingScreen';

import HeroSurface from './sections/HeroSurface';
import TwilightZone from './sections/TwilightZone';
import MidnightZone from './sections/MidnightZone';
import AbyssalPlain from './sections/AbyssalPlain';
import MarianaTrench from './sections/MarianaTrench';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <FluidCursor />
      <DepthCounter />
      <SonarPulse />
      <BackgroundOverlay />

      <main className={`relative transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSurface />
        <TwilightZone />
        <MidnightZone />
        <AbyssalPlain />
        <MarianaTrench />
      </main>
    </>
  );
}
