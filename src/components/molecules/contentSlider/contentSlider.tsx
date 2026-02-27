'use client';

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './contentSlider.module.scss';
import cn from 'classnames';
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';

export type ItemSliderProps = {
  title: string;
  date: string;
  strapiBlockContent: BlocksContent;
};

type ContentSliderProps = {
  items: ItemSliderProps[];
  duration?: number;
  enterThreshold?: number;
};

const ContentSlider = <K extends string = string>({
  items,
  duration = 450,
  enterThreshold = 0.01,
}: ContentSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVisible, setActiveVisible] = useState(true);

  const viewsRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tabsRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const measureIndicator = (index: number) => {
    const btn = btnRefs.current[index];
    const container = tabsRef.current;
    if (!btn || !container) return;

    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setIndicator({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
    });
  };

  useLayoutEffect(() => {
    measureIndicator(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const onResize = () => measureIndicator(activeIndexRef.current);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const trackStyle = useMemo<React.CSSProperties>(() => {
    return {
      transform: `translate3d(${-activeIndex * 100}%, 0, 0)`,
      transitionDuration: `${duration}ms`,
    };
  }, [activeIndex, duration]);

  useEffect(() => {
    const root = viewsRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        const currentActive = activeIndexRef.current;

        for (const entry of entries) {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (idx !== currentActive) continue;

          if (entry.intersectionRatio >= enterThreshold) {
            setActiveVisible(true);
          }
        }
      },
      {
        root,
        threshold: [0, enterThreshold, 0.05, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    itemRefs.current.forEach((node, i) => {
      if (!node) return;
      node.dataset.index = String(i);
      io.observe(node);
    });

    return () => io.disconnect();
  }, [enterThreshold, items.length]);

  const onSelect = (next: number) => {
    if (next === activeIndex) return;
    setActiveVisible(false);
    measureIndicator(next);
    setActiveIndex(next);
  };

  return (
    <>
      <div ref={viewsRef} className={styles.views} aria-live="polite">
        <div className={styles.stack} style={trackStyle}>
          {items.map((item, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={cn(styles.viewItem, {
                  [styles.isActive]: isActive,
                  [styles.isActiveVisible]: isActive && activeVisible,
                })}
              >
                <div className={styles.viewInner}>
                  <h3 className={styles.h3}>{item.title}</h3>
                  <p className={styles.period}>{item.date}</p>
                  <BlocksRenderer content={item.strapiBlockContent} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        ref={tabsRef}
        className={styles.tabs}
        role="tablist"
        aria-label="Content"
      >
        <span
          className={styles.indicator}
          style={{
            width: `${indicator.width}px`,
            transform: `translateX(${indicator.left}px)`,
          }}
          aria-hidden="true"
        />

        {items.map((item, i) => {
          const selected = i === activeIndex;

          return (
            <button
              key={i}
              ref={(el) => {
                btnRefs.current[i] = el;
              }}
              type="button"
              className={cn(styles.tabBtn, {
                [styles.active]: selected,
              })}
              role="tab"
              aria-selected={selected}
              onClick={() => onSelect(i)}
            >
              <span className={styles.tabLabel}>{item.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(ContentSlider);
