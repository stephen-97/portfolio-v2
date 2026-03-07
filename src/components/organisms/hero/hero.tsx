import React from 'react';
import styles from './hero.module.scss';
import Intro from '@/src/components/molecules/intro/intro';
import IntroPhoto from '@/src/components/molecules/introPhoto/introPhoto';
import Layout from '@/src/components/atoms/layout/layout';
import Stats from '@/src/components/molecules/stats/stats';
import { HeroSection_strapi } from '@/src/lib/api-types/home-page';
import { AppLocale } from '@/app/[locale]/layout';

type HeroProps = {
  heroData: HeroSection_strapi;
  locale: AppLocale;
};

const Hero = ({ heroData, locale }: HeroProps) => {
  const { title, description, subtitle, statistic } = heroData;

  return (
    <Layout className={styles.hero} innerClassName={styles.inner}>
      <div className={styles.introContainer}>
        <Intro
          title={title}
          description={description}
          subtitle={subtitle}
          locale={locale}
        />

        <IntroPhoto />
      </div>

      <Stats statistics={statistic} />
    </Layout>
  );
};

export default Hero;
