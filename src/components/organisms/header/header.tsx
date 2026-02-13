'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import LinkHeader from '@/src/components/atoms/linkHeader';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.left}></div>

        <nav className={styles.nav} aria-label="Navigation principale">
          <ul>
            <li>
              <LinkHeader href="#about">Recherche</LinkHeader>
            </li>
            <li>
              <LinkHeader href="#experience">À propos</LinkHeader>
            </li>
            <li>
              <LinkHeader href="#contact">Contact</LinkHeader>
            </li>
          </ul>
        </nav>

        <div className={styles.right}></div>
      </div>
    </header>
  );
};
