import React from 'react';
import styles from './footer.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import LinkIcon from '@/src/components/atoms/linkIcon/linkIcon';
import LinkHeader from '@/src/components/atoms/linkHeader';
import { useTranslations } from 'next-intl';
import {
  Link_strapi,
  MediaLink_strapi,
} from '@/src/lib/api-types/strapi-types';

export type TSocialMediaLink = {
  id: string | number;
  href: string;
  label: string;
  icon: {
    type: string;
    children: {
      type: string;
      text: string;
    }[];
  }[];
};

type FooterProps = {
  quickLinks: Link_strapi[];
  socialMediaLinks: MediaLink_strapi[];
};
const Footer = ({ quickLinks, socialMediaLinks }: FooterProps) => {
  const t = useTranslations('footer');

  return (
    <Layout
      as="footer"
      variant="lg"
      mainPage={false}
      className={styles.footer}
      innerClassName={styles.inner}
    >
      <div className={styles.top}>
        <div className={styles.col}>
          <h3 className={styles.heading}>{t('portfolio-title')}</h3>
          <p className={styles.copy}>
            Designed and developed with Next.js and powered by Strapi as a
            headless CMS
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>{t('quickLinks-title')}</h3>
          <nav className={styles.links}>
            <ul>
              {quickLinks?.map((link) => (
                <li key={link.id}>
                  <LinkHeader href={link.href}>{link.title}</LinkHeader>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>{t('socialMedia-title')}</h3>
          <ul className={styles.socials}>
            {socialMediaLinks?.map((social) => {
              const htmlContent = social.icon
                ?.map((node) =>
                  node.children?.map((child) => child.text).join(''),
                )
                .join('');

              return (
                <li key={social.id}>
                  <LinkIcon href={social.href} aria-label={social.label}>
                    <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  </LinkIcon>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles.separator} />

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Stephen Loiola Bastos. All rights reserved.
      </div>
    </Layout>
  );
};

export default Footer;
