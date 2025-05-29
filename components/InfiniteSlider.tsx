'use client';
import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';

type InfiniteSliderProps = {
  children: ReactNode[];
  speed?: number; // lower is faster
  gap?: string;
  className?: string;
};

export default function InfiniteSlider({
  children,
  speed = 20,
  gap = 'gap-8',
  className = '',
}: InfiniteSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  const duplicatedItems = [...children, ...children];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;
    setWidth(totalWidth);

    controls.start({
      x: [0, -totalWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    });
  }, [children, controls, speed]);

  return (
    <div className={clsx('relative overflow-hidden w-full', className)}>
      {/* Fade effect on the left */}
      {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/50 to-transparent z-10" /> */}
      {/* Fade effect on the right */}
      {/* <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/50 to-transparent z-10" /> */}

      <motion.div
        ref={containerRef}
        className={clsx('flex', gap)}
        animate={controls}
        initial={{ x: 0 }}
      >
        {duplicatedItems.map((child, index) => (
          <div key={index} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
