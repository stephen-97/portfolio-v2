import LinkHeader from '@/src/components/atoms/linkHeader';
import ChooseLanguage from '@/src/components/atoms/chooseLanguage/chooseLanguage';
import ButtonThemeToggle from '@/src/components/atoms/buttonThemeToggle/buttonThemeToggle';
import styles from './mobileMenu.module.scss';
import cn from 'classnames';
import { Link_strapi } from '@/src/lib/api-types/strapi-types';
import { useTranslations } from 'next-intl';

type MobileMenuProps = {
  isOpen: boolean;
  links: Link_strapi[];
};

const MobileMenu = ({ isOpen, links }: MobileMenuProps) => {
  const t = useTranslations('header');

  return (
    <aside
      className={cn(styles.mobileMenu, { [styles.open]: isOpen })}
      aria-hidden={!isOpen}
    >
      <div className={styles.inner}>
        <section className={styles.section}>
          <h2 id="mobile-theme-title" className={styles.sectionTitle}>
            {t('side-menu.quickLinks-title')}
          </h2>

          <nav aria-labelledby="mobile-nav-title">
            <span id="mobile-nav-title" className="sr-only">
              {t('side-menu.nav-description')}
            </span>
            <ul className={styles.list}>
              {links?.map((link) => (
                <li key={`mobile-${link.id}`} className={styles.item}>
                  <LinkHeader className={styles.link} href={link.href}>
                    {link.title}
                  </LinkHeader>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className={styles.section} aria-labelledby="mobile-lang-title">
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
  );
};

export default MobileMenu;
