import React from 'react';
import styles from './services.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import ServiceBlock, {
  ServiceColor,
} from '@/src/components/molecules/serviceBlock/serviceBlock';
import BackgroundBlocks from '@/src/components/atoms/backgrounds/backgroundBlocks/backgroundBlocks';
import { SkillsGraphSVG2 } from '@/src/lib/svg';

type ServiceItem = {
  title: string;
  tags?: string[];
  svg: React.ReactNode;
  color: ServiceColor;
};

const services: ServiceItem[] = [
  {
    title: 'Gradiation Background',
    color: 'white',
    tags: [
      'Next js',
      'Node',
      'React js',
      'Javascript',
      'TypeScript',
      'Jquery',
      'SCSS Modules',
    ],
    svg: <></>,
  },
  {
    title: 'Frontend Development',
    color: 'purple',
    tags: [
      'Next js',
      'Node',
      'React js',
      'Javascript',
      'TypeScript',
      'Jquery',
      'SCSS Modules',
    ],
    svg: <></>,
  },
  {
    title: 'Architecture & Engineering',
    color: 'blue',
    tags: ['Clean Architecture', 'SSR / SSG', 'API Integration'],
    svg: <></>,
  },
  {
    title: 'Performance & Optimization',
    color: 'green',
    tags: ['Core Web Vitals', 'Lighthouse', 'Code Splitting'],
    svg: <></>,
  },
  {
    title: 'Accessibilité & RGAA',
    color: 'orange',
    tags: ['RGAA', 'WCAG 2.1', 'ARIA', 'Keyboard Navigation'],
    svg: <></>,
  },
];

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

      <div className={styles.grid}>
        <div className={styles.left}>
          <ServiceBlock {...services[0]} />
        </div>

        <div className={styles.right}>
          {services.slice(1).map((service, index) => (
            <ServiceBlock key={index} {...service} />
          ))}
        </div>

        <div className={styles.bottom}>
          <ServiceBlock
            color={'white'}
            title={'Skills'}
            graphSVG={<SkillsGraphSVG2 />}
            titlePosition={'center'}
            svg={<></>}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
