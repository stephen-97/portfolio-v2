'use client';

import { useEffect, RefObject } from 'react';
import Link from '@/src/components/atoms/links/link/link';
import ChooseLanguage from '@/src/components/atoms/chooseLanguage/chooseLanguage';
import ButtonThemeToggle from '@/src/components/atoms/buttonThemeToggle/buttonThemeToggle';
import styles from './mobileMenu.module.scss';
import cn from 'classnames';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';
import { useTranslations } from 'next-intl';

type MobileMenuProps = {
  isOpen: boolean;
  links: Link_strapi[];
  onClose: () => void;
  menuRef?: RefObject<HTMLElement | null>;
};

const MobileMenu = ({ isOpen, links, onClose, menuRef }: MobileMenuProps) => {
  const t = useTranslations('header');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={cn(styles.overlay, { [styles.overlayOpen]: isOpen })}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={cn(styles.mobileMenu, { [styles.open]: isOpen })}
        aria-hidden={!isOpen}
        tabIndex={-1}
        ref={menuRef}
      >
        <div className={styles.inner}>
          <section className={styles.section}>
            <h2 id="mobile-link-title" className={styles.sectionTitle}>
              {t('side-menu.quickLinks-title')}
            </h2>

            <nav aria-labelledby="mobile-link-title">
              <span id="mobile-nav-title" className="sr-only">
                {t('side-menu.nav-description')}
              </span>

              <ul className={styles.list}>
                {links?.map((link) => (
                  <li key={`mobile-${link.id}`} className={styles.item}>
                    <Link
                      className={styles.link}
                      href={link.href}
                      onClick={onClose}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section
            className={styles.section}
            aria-labelledby="mobile-lang-title"
          >
            <h2 id="mobile-lang-title" className={styles.sectionTitle}>
              {t('side-menu.language-title')}
            </h2>
            <ChooseLanguage />
          </section>

          <section
            className={styles.section}
            aria-labelledby="mobile-theme-title"
          >
            <h2 id="mobile-theme-title" className={styles.sectionTitle}>
              {t('side-menu.theme-title')}
            </h2>
            <ButtonThemeToggle />
          </section>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
