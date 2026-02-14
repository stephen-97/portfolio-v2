import React from 'react';
import styles from './hero.module.scss';
import Intro from '@/src/components/molecules/intro/intro';
import IntroPhoto from '@/src/components/molecules/introPhoto/introPhoto';
import Layout from '@/src/components/atoms/layout/layout';
import Stats from '@/src/components/molecules/stats/stats';

const Hero = () => {
  return (
    <Layout className={styles.hero} innerClassName={styles.inner}>
      <div className={styles.introContainer}>
        <Intro />
        <IntroPhoto />
      </div>
      <Stats />
    </Layout>
  );
};

export default Hero;
