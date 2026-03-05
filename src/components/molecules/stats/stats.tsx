'use client';

import { useEffect, useRef, useState, memo } from 'react';
import styles from './stats.module.scss';
import { Statistic_strapi } from '@/src/lib/api-types/home-page';
import cn from 'classnames';

type StatsProps = {
  statistics: Statistic_strapi[];
  onComplete?: () => void;
};

const Stats = ({ statistics, onComplete }: StatsProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [values, setValues] = useState<number[]>(statistics.map(() => 0));

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    console.log(visible, statistics, onComplete);
    const duration = 1200;
    let finished = 0;

    statistics.forEach((stat, index) => {
      const target = parseInt(stat.value.replace(/\D/g, ''), 10) || 0;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * target);

        setValues((prev) => {
          const next = [...prev];
          next[index] = value;
          return next;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          finished++;
          if (finished === statistics.length && onComplete) {
            onComplete();
          }
        }
      };

      requestAnimationFrame(animate);
    });
  }, [visible]);

  return (
    <article
      ref={wrapperRef}
      className={cn(styles.wrapper, { [styles.wrapperVisible]: visible })}
    >
      <div className={styles.blurCard}>
        {statistics.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <p className={styles.value}>{values[index]}+</p>
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default memo(Stats);
