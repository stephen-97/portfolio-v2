import React from 'react';
import styles from './intro.module.scss';
import LinkDownload from '@/src/components/atoms/linkDownload/linkDownload';

type IntroProps = {
  subtitle: string;
  title: string;
  description: string;
};

const Intro = ({ subtitle, title, description }: IntroProps) => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.kicker}>{subtitle}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <LinkDownload href={'/'} />
      </div>
    </section>
  );
};

export default Intro;
