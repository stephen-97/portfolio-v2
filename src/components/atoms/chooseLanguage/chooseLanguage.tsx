'use client';

import { useState, useRef, useEffect, memo } from 'react';
import { usePathname } from 'next/navigation';
import styles from './chooseLanguage.module.scss';
import cn from 'classnames';

type Lang = 'fr' | 'en';

const options: { value: Lang; label: string; flag: string }[] = [
  { value: 'fr', label: 'FR', flag: '🇫🇷' },
  { value: 'en', label: 'EN', flag: '🇬🇧' },
];

type ChooseLanguageProps = {
  className?: string;
};

const ChooseLanguage = ({ className }: ChooseLanguageProps) => {
  const pathname = usePathname();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const [open, setOpen] = useState(false);

  const currentLang: Lang = pathname.startsWith('/fr') ? 'fr' : 'en';
  const activeIndex = options.findIndex((o) => o.value === currentLang);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (open) {
      const indexToFocus = activeIndex >= 0 ? activeIndex : 0;
      itemRefs.current[indexToFocus]?.focus();
    }
  }, [open, activeIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;

    const currentIndex = itemRefs.current.findIndex(
      (el) => el === document.activeElement,
    );

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex =
        currentIndex < options.length - 1 ? currentIndex + 1 : 0;
      itemRefs.current[nextIndex]?.focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : options.length - 1;
      itemRefs.current[prevIndex]?.focus();
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={cn(styles.wrapper, className)}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={buttonRef}
        className={styles.trigger}
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
      >
        <span className={styles.flag}>{options[activeIndex].flag}</span>
        <span>{options[activeIndex].label}</span>
        <span className={cn(styles.chevron, open && styles.chevronOpen)}>
          ▾
        </span>
      </button>

      {open && (
        <ul className={styles.dropdown} role="menu">
          {options.map((option, index) => {
            const newPath = pathname.replace(/^\/(fr|en)/, `/${option.value}`);
            const isActive = option.value === currentLang;

            return (
              <li key={option.value} role="none">
                <a
                  href={newPath}
                  role="menuitem"
                  tabIndex={-1}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(styles.option, isActive && styles.active)}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.flag}>{option.flag}</span>
                  <span>{option.label}</span>
                  {isActive && <span className={styles.valid}>✓</span>}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default memo(ChooseLanguage);
