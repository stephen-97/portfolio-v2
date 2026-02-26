import React from 'react';
import styles from './projects.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import Project from '@/src/components/molecules/project/project';
import Title from '@/src/components/atoms/title/title';
import { SectionProps } from 'react-html-props';

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

const Projects = ({ id }: SectionProps) => {
  return (
    <Layout className={styles.projects} innerClassName={styles.inner} id={id}>
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
