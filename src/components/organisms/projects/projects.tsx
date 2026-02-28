import React from 'react';
import styles from './projects.module.scss';
import Layout from '@/src/components/atoms/layout/layout';
import Project from '@/src/components/molecules/project/project';
import Title from '@/src/components/atoms/title/title';
import { SectionProps } from 'react-html-props';
import { ProjectsSection_strapi } from '@/src/lib/api-types/home-page';

type ProjectsProps = SectionProps & {
  projects: ProjectsSection_strapi;
};

const Projects = ({ id, projects }: ProjectsProps) => {
  const { projectBlock } = projects;

  return (
    <Layout className={styles.projects} innerClassName={styles.inner} id={id}>
      <Title index={'02'}>Solo projects</Title>
      <ul className={styles.wrapper}>
        {projectBlock.map((project) => (
          <li key={project.title} className={styles.item}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Projects;
