'use client';

import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import LinkHeader from '@/src/components/atoms/linkHeader';
import Layout from '@/src/components/atoms/layout/layout';
import cn from 'classnames';
import HamburgerButton from '@/src/components/atoms/hamburgerButton/hamburgerButton';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';
import ButtonThemeToggle from '@/src/components/atoms/buttonThemeToggle/buttonThemeToggle';
import ChooseLanguage from '@/src/components/atoms/chooseLanguage/chooseLanguage';
import MobileMenu from '@/src/components/molecules/mobileMenu/mobileMenu';

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
        role="banner"
        className={cn(styles.header, { [styles.scrolled]: scrolled })}
        innerClassName={styles.inner}
        mainPage={false}
      >
        <ChooseLanguage className={styles.chooseLanguage} />
        <ButtonThemeToggle className={styles.buttonThemeToggle} />

        <nav
          id="main-navigation"
          className={styles.navDesktop}
          aria-labelledby="principal-nav"
        >
          <span className="sr-only" id="principal-nav">
            Navigation principale
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
        className={styles.hamburgerButton}
        openStateHandler={{ state: isOpen, set: setIsOpen }}
        onToggle={setIsOpen}
      />

      <MobileMenu isOpen={isOpen} links={quickLinks} />
    </>
  );
};
