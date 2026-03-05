'use client';

import { useEffect, useRef } from 'react';
import styles from './stats.module.scss';
import { Statistic_strapi } from '@/src/lib/api-types/home-page';

type StatsProps = {
  statistics: Statistic_strapi[];
};

const Stats = ({ statistics }: StatsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        valuesRef.current.forEach((el, index) => {
          if (!el) return;

          const rawValue = statistics[index].value;
          const target = parseInt(rawValue.replace(/\D/g, ''), 10) || 0;

          const duration = 1200;
          let startTime: number | null = null;

          const animate = (time: number) => {
            if (!startTime) startTime = time;

            const progress = Math.min((time - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            el.textContent = `${value}+`;

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        });

        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [statistics]);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.blurCard}>
        {statistics.map((item, index) => (
          <div key={item.id} className={styles.item}>
            <p
              ref={(el) => {
                valuesRef.current[index] = el;
              }}
              className={styles.value}
            >
              0+
            </p>
            <p className={styles.label}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
