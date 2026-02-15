import React from 'react';
import ServiceBlock, {
  ServiceColor,
} from '@/src/components/atoms/serviceBlock/serviceBlock';
import styles from './servicesList.module.scss';

type ServiceItem = {
  title: string;
  tags: string[];
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

const ServiceList = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.left}>
        <ServiceBlock {...services[0]} />
      </div>

      <div className={styles.right}>
        {services.slice(1).map((service, index) => (
          <ServiceBlock key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;
