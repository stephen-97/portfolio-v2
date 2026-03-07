// src/components/theme/theme-runtime.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ThemeRuntime = () => {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.documentElement;

    const getSystemTheme = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    try {
      const stored = localStorage.getItem('theme');
      const theme =
        stored === 'system' ? getSystemTheme() : stored || getSystemTheme();

      el.setAttribute('data-theme', theme);
      el.style.colorScheme = theme;
    } catch {}
  }, [pathname]);

  return null;
};

export default ThemeRuntime;
