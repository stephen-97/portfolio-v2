import React from 'react';
import styles from './projects.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import BackgroundAurora from '@/src/components/atoms/backgrounds/backgroundAurora/backgroundAurora';
import Project from '@/src/components/molecules/project/project';

const projects = [
  {
    title: 'Javascript + Java developer',
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
    title: 'Design System',
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

const Projects = () => {
  return (
    <Layout
      className={styles.projects}
      innerClassName={styles.inner}
      backgroundChildren={<BackgroundAurora />}
    >
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.wrapper}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
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
