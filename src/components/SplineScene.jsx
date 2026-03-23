import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplineScene({ onLoad }) {
  const [app, setApp] = useState(null);

  const sceneUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  const handleLoad = (splineApp) => {
    setApp(splineApp);
    if (onLoad) onLoad(splineApp);
  };

  useEffect(() => {
    if (!app) return;

    const shark = app.findObjectByName('Shape') || app.findObjectByName('Shark') || app.findObjectByName('Cube') || app._root;
    if (!shark) return;

    const rotateXTo = gsap.quickTo(shark.rotation, "x", { duration: 0.8, ease: "power3", force3D: true });
    const rotateYTo = gsap.quickTo(shark.rotation, "y", { duration: 0.8, ease: "power3", force3D: true });

    let baseRotationY = shark.rotation.y;
    let baseRotationX = shark.rotation.x;

    const mouseMove = (e) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;

      rotateXTo(baseRotationX + normalizedY * 0.3);
      rotateYTo(baseRotationY + normalizedX * 0.3);
    };

    window.addEventListener("mousemove", mouseMove);

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        // --- Z-AXIS FLY-THROUGH ---
        // Pushing from distant (-3000) to entirely past the camera (+2000)
        shark.position.z = gsap.utils.interpolate(-3000, 2000, self.progress);

        // --- MAGNETIC SCALING ---
        // Expands massively as it approaches the lens
        const dynamicScale = gsap.utils.interpolate(0.5, 4.5, self.progress);
        shark.scale.x = dynamicScale;
        shark.scale.y = dynamicScale;
        shark.scale.z = dynamicScale;

        // --- MIDNIGHT BARREL ROLL ---
        let rollProgress = 0;
        if (self.progress > 0.4 && self.progress < 0.7) {
           rollProgress = (self.progress - 0.4) / 0.3;
        } else if (self.progress >= 0.7) {
           rollProgress = 1;
        }
        baseRotationY = rollProgress * Math.PI * 2;
        rotateYTo(baseRotationY);

        shark.position.y = gsap.utils.interpolate(100, -300, self.progress);
      }
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      trigger.kill();
    };
  }, [app]);

  return (
    <div className="w-full h-full relative pointer-events-none spline-container transition-opacity duration-1000">
      <Spline 
        scene={sceneUrl} 
        onLoad={handleLoad}
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}
