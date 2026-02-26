import React from 'react';
import styles from './hero.module.scss';
import Intro from '@/src/components/molecules/intro/intro';
import IntroPhoto from '@/src/components/molecules/introPhoto/introPhoto';
import Layout from '@/src/components/atoms/layout/layout';
import Stats from '@/src/components/molecules/stats/stats';
import { Hero_strapi } from '@/src/lib/api-types/home-page';

type HeroProps = {
  heroData: Hero_strapi;
};
const Hero = ({ heroData }: HeroProps) => {
  const { title, description, subtitle } = heroData;
  return (
    <Layout className={styles.hero} innerClassName={styles.inner}>
      <div className={styles.introContainer}>
        <Intro title={title} description={description} subtitle={subtitle} />
        <IntroPhoto />
      </div>
      <Stats />
    </Layout>
  );
};

export default Hero;
