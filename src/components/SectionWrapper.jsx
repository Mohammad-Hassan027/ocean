import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SectionWrapper({ children, className }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scale goes from 0.8 to 1 as it enters.
  // Then zooms radically from 1 to 4 as it exits upward, creating the "SpaceEdu" deep dive effect.
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ scale, opacity }}
      className={`relative w-full min-h-screen flex flex-col justify-center items-center ${className || ''}`}
    >
      {children}
    </motion.div>
  );
}
