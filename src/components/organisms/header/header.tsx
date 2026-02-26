'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import LinkHeader from '@/src/components/atoms/linkHeader';
import Layout from '@/src/components/atoms/layout/layout';
import cn from 'classnames';
import HamburgerButton from '@/src/components/atoms/hamburgerButton/hamburgerButton';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';

type HeaderProps = {
  quickLinks: Link_strapi[];
};

export const Header = ({ quickLinks }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Layout
        as="header"
        className={cn(styles.header, { [styles.scrolled]: scrolled })}
        innerClassName={styles.inner}
        mainPage={false}
      >
        <div className={styles.left}></div>

        <nav
          id="main-navigation"
          className={styles.navDesktop}
          aria-label="Navigation principale"
        >
          <ul>
            {quickLinks?.map((link) => (
              <li key={link.id}>
                <LinkHeader href={link.href}>{link.title}</LinkHeader>
              </li>
            ))}
          </ul>
        </nav>

        <HamburgerButton
          className={styles.hamburgerButton}
          openStateHandler={{ state: isOpen, set: setIsOpen }}
          onToggle={setIsOpen}
        />

        <div className={styles.right}></div>
      </Layout>

      <div
        className={cn(styles.mobileMenu, { [styles.open]: isOpen })}
        aria-hidden={!isOpen}
        role="menu"
      >
        <nav aria-label="Navigation mobile">
          <ul>
            {quickLinks?.map((link) => (
              <li key={`mobile-${link.id}`}>
                <LinkHeader href={link.href}>{link.title}</LinkHeader>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
