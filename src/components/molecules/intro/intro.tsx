import React from 'react';
import styles from './intro.module.scss';
import LinkDownload from '@/src/components/atoms/linkDownload/linkDownload';
const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.kicker}>Lorem ipsum dolor sit amet</p>

        <h1 className={styles.title}>Lorem Ipsum</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <LinkDownload href={'/'} />
      </div>
    </section>
  );
};

export default Intro;
