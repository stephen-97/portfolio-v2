'use client';

import React from 'react';
import styles from './aboutMe.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import Title from '@/src/components/atoms/title/title';
import { AboutMeSection_strapi } from '@/src/lib/api-types/home-page';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export type SectionProps = {
  id?: string;
};

type AboutMeProps = SectionProps & {
  aboutMe: AboutMeSection_strapi;
};

const AboutMe = ({ id, aboutMe }: AboutMeProps) => {
  const { sectionTitle, description } = aboutMe;
  return (
    <Layout id={id} className={styles.hero} innerClassName={styles.inner}>
      <Title index={'01'}>{sectionTitle.title}</Title>

      <BlocksRenderer
        content={description}
        blocks={{
          paragraph: ({ children }) => (
            <p className={styles.paragraph}>{children}</p>
          ),
          list: ({ children, format }) => {
            if (format === 'unordered') {
              return <ul className={styles.techList}>{children}</ul>;
            }
            return <ol className={styles.techList}>{children}</ol>;
          },
        }}
      />
    </Layout>
  );
};

export default AboutMe;
