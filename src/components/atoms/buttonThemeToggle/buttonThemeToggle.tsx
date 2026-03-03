'use client';

import { useEffect, useState, memo } from 'react';
import styles from './buttonThemeToggle.module.scss';
import cn from 'classnames';
import { SunSVG, MoonSVG } from '@/src/lib/svg';

type ButtonThemeToggleProps = {
  className?: string;
};

type Theme = 'light' | 'dark';

const ButtonThemeToggle = ({ className }: ButtonThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme');

    if (attr === 'dark' || attr === 'light') {
      setTheme(attr);
    }

    setMounted(true);
  }, []);

  const applyTheme = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.cookie = `theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setTheme(next);
  };

  const toggleTheme = () => {
    applyTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(styles.toggle, className, {
        [styles.dark]: theme === 'dark',
      })}
    >
      <span className={styles.track} />
      <span className={styles.thumb}>
        {theme === 'dark' ? <MoonSVG /> : <SunSVG />}
      </span>
    </button>
  );
};

export default memo(ButtonThemeToggle);
