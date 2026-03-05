'use client';

import { memo } from 'react';
import styles from './buttonThemeToggle.module.scss';
import cn from 'classnames';
import { SunSVG, MoonSVG } from '@/src/lib/svg';

type ButtonThemeToggleProps = {
  className?: string;
};

type Theme = 'light' | 'dark';

const ButtonThemeToggle = ({ className }: ButtonThemeToggleProps) => {
  const applyTheme = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    document.cookie = `theme=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
  };

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(styles.toggle, className)}
    >
      <span className={styles.track} />
      <span className={styles.thumb}>
        <span className={cn(styles.icon, styles.sun)} aria-hidden="true">
          <SunSVG />
        </span>
        <span className={cn(styles.icon, styles.moon)} aria-hidden="true">
          <MoonSVG />
        </span>
      </span>
    </button>
  );
};

export default memo(ButtonThemeToggle);
