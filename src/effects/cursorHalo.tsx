'use client';

import { useEffect, useRef } from 'react';
import styles from './cursorHalo.module.scss';

const CursorHalo = () => {
  const haloRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const halo = haloRef.current;
    if (!halo) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let started = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!started) {
        x = targetX;
        y = targetY;
        halo.style.opacity = '1';
        started = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;

      halo.style.left = `${x}px`;
      halo.style.top = `${y}px`;

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={haloRef} className={styles.cursorHalo} aria-hidden="true" />;
};

export default CursorHalo;
