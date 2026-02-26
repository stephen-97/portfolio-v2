import React from 'react';
import styles from './aboutMe.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import Title from '@/src/components/atoms/title/title';

export type SectionProps = {
  id?: string;
};

const Hero = ({ id }: SectionProps) => {
  return (
    <Layout id={id} className={styles.hero} innerClassName={styles.inner}>
      <Title index={'01'}>About me</Title>

      <p className={styles.paragraph}>
        I’m currently working as a Frontend Engineer, focused on building
        high-performance and accessible web applications. With several years of
        professional experience, I specialize in modern frontend technologies
        such as React, Next.js, TypeScript, and scalable CSS architectures using
        SCSS Modules. My expertise goes beyond development itself.
      </p>

      <p className={styles.paragraph}>
        Here are a few technologies I’ve been working with recently:
      </p>

      <ul className={styles.techList}>
        <li>Next Js</li>
        <li>React</li>
        <li>Node</li>
        <li>Nest.js</li>
        <li>TypeScript</li>
        <li>Cursor</li>
      </ul>

      <p className={styles.paragraph}>
        And here somes technologies I’m recently learning:
      </p>

      <ul className={styles.techList}>
        <li>Solid JS</li>
        <li>Svelte</li>
      </ul>
    </Layout>
  );
};

export default Hero;
