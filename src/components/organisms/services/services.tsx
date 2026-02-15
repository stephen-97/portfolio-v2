import React from 'react';
import styles from './services.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import ServicesList from '@/src/components/molecules/servicesList/servicesList';
import BackgroundBlocks from '@/src/components/atoms/backgrounds/backgroundBlocks/backgroundBlocks';

const Services = () => {
  return (
    <Layout
      backgroundChildren={<BackgroundBlocks />}
      className={styles.service}
    >
      <h2 className={styles.title}>About me</h2>
      <p className={styles.paragraph}>
        I’m currently working as a Frontend Engineer, focused on building
        high-performance and accessible web applications. With several years of
        professional experience, I specialize in modern frontend technologies
        such as React, Next.js, TypeScript, and scalable CSS architectures using
        SCSS Modules. My expertise goes beyond development itself. I’m deeply
        involved in frontend architecture, writing technical specifications,
        conducting code reviews, and ensuring long-term maintainability through
        clean structure and strong engineering principles. I care about building
        systems that are not only functional, but scalable and easy to evolve.
      </p>
      <ServicesList />
    </Layout>
  );
};

export default Services;
