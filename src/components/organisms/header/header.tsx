'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import Link from '@/src/components/atoms/links/link/link';
import Layout from '@/src/components/atoms/layout/layout';
import cn from 'classnames';
import HamburgerButton from '@/src/components/atoms/hamburgerButton/hamburgerButton';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';
import ButtonThemeToggle from '@/src/components/atoms/buttonThemeToggle/buttonThemeToggle';
import ChooseLanguage from '@/src/components/atoms/chooseLanguage/chooseLanguage';
import MobileMenu from '@/src/components/molecules/mobileMenu/mobileMenu';
import { useTranslations } from 'next-intl';
import Logo from '@/src/components/atoms/logo/logo';
import { AppLocale } from '@/app/[locale]/layout';

type HeaderProps = {
  quickLinks: Link_strapi[];
  locale: AppLocale;
};

export const Header = ({ quickLinks, locale }: HeaderProps) => {
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

    menu.addEventListener('keydown', handleTab);
    hamburger.addEventListener('keydown', handleTab);

    return () => {
      menu.removeEventListener('keydown', handleTab);
      hamburger.removeEventListener('keydown', handleTab);
      hamburger.focus();
    };
  }, [isOpen]);

  const skipLinks = (
    <div className={styles.skipLinks}>
      <div className={styles.slipLinksContent}>
        <a href={quickLinks?.at?.(0)?.href} className={styles.skipLink}>
          {t('main-nav.skip-to-content')}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Layout
        as="header"
        role="banner"
        variant="xl"
        className={cn(styles.header, { [styles.scrolled]: scrolled })}
        innerClassName={styles.inner}
        mainPage={false}
        backgroundChildren={skipLinks}
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
                <Link
                  href={
                    link.href.startsWith('#')
                      ? `/${locale}${link.href}`
                      : link.href
                  }
                >
                  {link.title}
                </Link>{' '}
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
