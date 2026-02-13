import React from 'react';
import styles from './hero.module.scss';
import Intro from '@/src/components/molecules/intro/intro';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Intro />
    </section>
  );
};

export default Hero;
