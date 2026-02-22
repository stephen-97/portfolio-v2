import React from 'react';
import styles from './projects.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import BackgroundAurora from '@/src/components/atoms/backgrounds/backgroundAurora/backgroundAurora';
import Project from '@/src/components/molecules/project/project';
import Title from '@/src/components/atoms/title/title';

const projects = [
  {
    title: 'Internal KPI Dashboard',
    role: 'Next.js Developer',
    period: '2025 - 2026',
    description:
      'Development of a high-performance internal dashboard used to monitor KPIs and business metrics. Focus on scalability, modular architecture and performance optimization.',
    stack: [
      { label: 'Next.js' },
      { label: 'TypeScript' },
      { label: 'SCSS Modules' },
      { label: 'REST API' },
      { label: 'ESLint' },
    ],
  },
  {
    title: 'Insurance Web Platform',
    role: 'Frontend React Developer',
    period: 'May 2023 – Dec 2023',
    description:
      'Creation of a customer-facing web application for insurance management. Emphasis on accessibility (WCAG), performance and reusable component architecture.',
    stack: [
      { label: 'React' },
      { label: 'Redux' },
      { label: 'Accessibility (WCAG)' },
      { label: 'Storybook' },
      { label: 'Jest' },
    ],
  },
  {
    title: 'Scalable Design System',
    role: 'Design System Engineer',
    period: '2022',
    description:
      'Built and maintained a scalable design system used across multiple products. Implemented documentation, component testing and strict code review workflows.',
    stack: [
      { label: 'React' },
      { label: 'TypeScript' },
      { label: 'Storybook' },
      { label: 'Figma' },
      { label: 'CI/CD' },
    ],
  },
];

const sideProjects = [
  {
    title: 'React Conditional Form Engine',
    role: 'Creator & Maintainer',
    period: '2024',
    description:
      'Open-source dynamic form engine with conditional logic, schema generation and runtime validation. Designed for enterprise-grade workflows.',
    stack: [
      { label: 'React' },
      { label: 'TypeScript' },
      { label: 'react-hook-form' },
      { label: 'Yup' },
    ],
    links: {
      github: 'https://github.com/username/react-conditional-form-engine',
      npm: 'https://www.npmjs.com/package/react-conditional-form-engine',
      live: 'https://react-form-engine-demo.com',
    },
  },
  {
    title: 'Next.js Performance Starter',
    role: 'Author',
    period: '2024',
    description:
      'Ultra-optimized Next.js starter template focused on Lighthouse 100 scores, bundle splitting strategy and scalable folder architecture.',
    stack: [
      { label: 'Next.js' },
      { label: 'TypeScript' },
      { label: 'SCSS Modules' },
      { label: 'ESLint' },
      { label: 'Prettier' },
    ],
    links: {
      github: 'https://github.com/username/nextjs-performance-starter',
      live: 'https://nextjs-performance-starter-demo.com',
    },
  },
  {
    title: 'Advanced Swiper Media Suite',
    role: 'Frontend Engineer',
    period: '2023',
    description:
      'Highly optimized Swiper-based media component system with zoom support, responsive behavior and accessibility improvements.',
    stack: [
      { label: 'React' },
      { label: 'Swiper.js' },
      { label: 'SCSS Modules' },
      { label: 'Accessibility' },
    ],
    links: {
      github: 'https://github.com/username/advanced-swiper-suite',
      npm: 'https://www.npmjs.com/package/advanced-swiper-suite',
    },
  },
];

const Projects = () => {
  return (
    <Layout
      className={styles.projects}
      innerClassName={styles.inner}
      backgroundChildren={<BackgroundAurora />}
    >
      <Title index={'02'}>Solo projects</Title>
      <div className={styles.wrapper}>
        {projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            role={project.role}
            period={project.period}
            description={project.description}
            stack={project.stack}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
