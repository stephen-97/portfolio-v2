import React from 'react';
import styles from './intro.module.scss';

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

        <p className={styles.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
    </section>
  );
};

export default Intro;
