import { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene({ onLoad }) {
  const [isLoading, setIsLoading] = useState(true);

  // NOTE: Replace this URL with the exact Glass Shark Spline link provided!
  // This is a placeholder public glass spline scene to ensure rendering works.
  const sceneUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  const handleLoad = (splineApp) => {
    setIsLoading(false);
    if (onLoad) {
      onLoad(splineApp);
    }
  };

  return (
    <div className="w-full h-full relative" style={{ pointerEvents: isLoading ? 'none' : 'auto' }}>
      {isLoading && <BubblesLoader />}
      <Spline 
        scene={sceneUrl} 
        onLoad={handleLoad}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function BubblesLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-[9000]">
      <div className="flex items-center space-x-3 bg-black/40 p-6 rounded-full backdrop-blur-md border border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <span className="ml-4 font-mono text-sm text-teal-100 tracking-[0.2em] uppercase">Loading 3D Ocean...</span>
      </div>
    </div>
  );
}
