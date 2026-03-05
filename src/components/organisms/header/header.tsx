'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import LinkHeader from '@/src/components/atoms/linkHeader';
import Layout from '@/src/components/atoms/layout/layout';
import cn from 'classnames';
import HamburgerButton from '@/src/components/atoms/hamburgerButton/hamburgerButton';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';
import ButtonThemeToggle from '@/src/components/atoms/buttonThemeToggle/buttonThemeToggle';
import ChooseLanguage from '@/src/components/atoms/chooseLanguage/chooseLanguage';
import MobileMenu from '@/src/components/molecules/mobileMenu/mobileMenu';
import { useTranslations } from 'next-intl';
import Logo from '@/src/components/atoms/logo/logo';

type HeaderProps = {
  quickLinks: Link_strapi[];
};

export const Header = ({ quickLinks }: HeaderProps) => {
  const t = useTranslations('header');

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    const hamburger = hamburgerRef.current;
    if (!menu || !hamburger) return;

    const menuFocusable = menu.querySelectorAll<HTMLElement>(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const focusable = [hamburger, ...Array.from(menuFocusable)];

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const container = menu;
    container.addEventListener('keydown', handleTab);
    hamburger.addEventListener('keydown', handleTab);

    return () => {
      container.removeEventListener('keydown', handleTab);
      hamburger.removeEventListener('keydown', handleTab);
      hamburger.focus();
    };
  }, [isOpen]);

  return (
    <>
      <Layout
        as="header"
        role="banner"
        variant={'xl'}
        className={cn(styles.header, { [styles.scrolled]: scrolled })}
        innerClassName={styles.inner}
        mainPage={false}
      >
        <Logo className={styles.logo} />
        <ChooseLanguage className={styles.chooseLanguage} />
        <ButtonThemeToggle className={styles.buttonThemeToggle} />

        <nav
          id="main-navigation"
          className={styles.navDesktop}
          aria-labelledby="principal-nav"
        >
          <span className="sr-only" id="principal-nav">
            {t('main-nav.nav-description')}
          </span>

          <ul>
            {quickLinks?.map((link) => (
              <li className={styles.item} key={link.id}>
                <LinkHeader href={link.href}>{link.title}</LinkHeader>
              </li>
            ))}
          </ul>
        </nav>
      </Layout>

      <HamburgerButton
        buttonRef={hamburgerRef}
        className={styles.hamburgerButton}
        openStateHandler={{ state: isOpen, set: setIsOpen }}
        onToggle={setIsOpen}
      />

      <MobileMenu
        menuRef={menuRef}
        isOpen={isOpen}
        links={quickLinks}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};
