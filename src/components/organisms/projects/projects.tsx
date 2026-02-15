import React from 'react';
import styles from './projects.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import BackgroundAurora from '@/src/components/atoms/backgrounds/backgroundAurora/backgroundAurora';

const Projects = () => {
  return (
    <Layout
      className={styles.projects}
      innerClassName={styles.inner}
      backgroundChildren={<BackgroundAurora />}
    >
      <h2>Projects</h2>
    </Layout>
  );
};

export default Projects;
