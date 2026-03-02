'use client';

import { useEffect, useState } from 'react';
import styles from './buttonThemeToggle.module.scss';
import cn from 'classnames';
import { SunSVG, MoonSVG } from '@/src/lib/svg';

type ButtonThemeToggleProps = {
  className?: string;
};

const ButtonThemeToggle = ({ className }: ButtonThemeToggleProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // On lit juste l'état déjà appliqué par le Script
  useEffect(() => {
    const current =
      (document.documentElement.getAttribute('data-theme') as
        | 'light'
        | 'dark') || 'light';

    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  };

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

export default ButtonThemeToggle;
