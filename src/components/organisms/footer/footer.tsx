import React from 'react';
import styles from './footer.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import LinkIcon from '@/src/components/atoms/linkIcon/linkIcon';
import Link from '@/src/components/atoms/links/link/link';
import { useTranslations } from 'next-intl';
import {
  Link_strapi,
  MediaLink_strapi,
} from '@/src/lib/api-types/strapi-types';

type FooterProps = {
  quickLinks: Link_strapi[];
  socialMediaLinks: MediaLink_strapi[];
};
const Footer = ({ quickLinks, socialMediaLinks }: FooterProps) => {
  const t = useTranslations('footer');

  return (
    <Layout
      as="footer"
      role="contentinfo"
      variant="lg"
      mainPage={false}
      className={styles.footer}
      innerClassName={styles.inner}
    >
      <div className={styles.top}>
        <div className={styles.col}>
          <h3 className={styles.heading}>{t('portfolio-title')}</h3>
          <p className={styles.copy}>{t('portfolio-description')}</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>{t('quickLinks-title')}</h3>
          <nav className={styles.links}>
            <ul>
              {quickLinks?.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>{t('socialMedia-title')}</h3>
          <ul className={styles.socials}>
            {socialMediaLinks?.map((social) => {
              const iconName = social.icon.title;

              return (
                <li key={social.id}>
                  <LinkIcon
                    href={social.href}
                    iconName={iconName}
                    aria-label={social.label}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.bottom}>
        © {new Date().getFullYear()} {t('copyrights')}
      </div>
    </Layout>
  );
};

export default Footer;
