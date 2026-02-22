'use client';

import React from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';
import { GitHubSVG } from '@/src/lib/svg';
import Layout from '@/src/components/atoms/layout/layout';
import LinkIcon from '@/src/components/atoms/linkIcon/linkIcon';

const Footer = () => {
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
          <h3 className={styles.heading}>Portfolio</h3>
          <p className={styles.copy}>
            Designed and developed with Next.js and powered by Strapi as a
            headless CMS
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>Quick Links</h3>
          <nav className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <h3 className={styles.heading}>Connect</h3>
          <div className={styles.socials}>
            <LinkIcon href="/">
              <GitHubSVG size={18} />
            </LinkIcon>
            <LinkIcon href="/">
              <GitHubSVG size={18} />
            </LinkIcon>
            <a href="#" aria-label="LinkedIn"></a>
          </div>
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
