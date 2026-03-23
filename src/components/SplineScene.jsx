import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplineScene({ onLoad }) {
  const [app, setApp] = useState(null);

  // Replace this URL with the EXACT link to the Glass Shark Spline scene
  const sceneUrl = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

  const handleLoad = (splineApp) => {
    setApp(splineApp);
    if (onLoad) onLoad(splineApp);
  };

  useEffect(() => {
    if (!app) return;

    // Grab the actual 'Shark' or primary object.
    const shark = app.findObjectByName('Shape') || app.findObjectByName('Shark') || app.findObjectByName('Cube') || app._root;
    if (!shark) return;

    // 1. Mouse Parallax (Look-At) Behavior
    const rotateXTo = gsap.quickTo(shark.rotation, "x", { duration: 0.8, ease: "power3" });
    const rotateYTo = gsap.quickTo(shark.rotation, "y", { duration: 0.8, ease: "power3" });

    // Base rotation tracked primarily by GSAP scroll.
    let baseRotationY = shark.rotation.y;
    let baseRotationX = shark.rotation.x;

    const mouseMove = (e) => {
      // Normalize cursor position [-1, 1]
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Add relative offset to track mouse
      rotateXTo(baseRotationX + normalizedY * 0.3);
      rotateYTo(baseRotationY + normalizedX * 0.3);
    };

    window.addEventListener("mousemove", mouseMove);

    // 2. Cinematic Scroll Master Timeline
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        // --- SCALE & Z-POSITION FOCUS ---
        // Shallows to Twilight: Scale up aggressively from tiny distance
        const dynamicScale = gsap.utils.interpolate(0.5, 3, Math.min(1, self.progress * 4));
        shark.scale.x = dynamicScale;
        shark.scale.y = dynamicScale;
        shark.scale.z = dynamicScale;

        // Bring Z forward
        shark.position.z = gsap.utils.interpolate(-1500, 200, self.progress);

        // --- MIDNIGHT BARREL ROLL ---
        // Progress window 0.4 -> 0.7 triggers a 360-degree rotation.
        let rollProgress = 0;
        if (self.progress > 0.4 && self.progress < 0.7) {
           rollProgress = (self.progress - 0.4) / 0.3;
        } else if (self.progress >= 0.7) {
           rollProgress = 1;
        }

        // Apply barrel roll cleanly to the base rotation
        baseRotationY = rollProgress * Math.PI * 2;
        rotateYTo(baseRotationY);

        // --- STATE-DRIVEN LIGHTING (Abyssal Zone 0.7+) ---
        // If your Spline material supports color shifting via JS API,
        // it usually looks like updating materials specifically by name/id.
        // For generic glow adaptation against a black background, 
        // shifting the model's Y closer to camera and scaling bounds 
        // works well if material variables aren't exposed. Let's drift Y slightly to 'loom'.
        shark.position.y = gsap.utils.interpolate(100, -200, self.progress);
      }
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      trigger.kill();
    };
  }, [app]);

  return (
    <div className="w-full h-full relative pointer-events-none">
      <Spline 
        scene={sceneUrl} 
        onLoad={handleLoad}
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
}
