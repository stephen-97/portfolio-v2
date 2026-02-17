import React from 'react';
import styles from './project.module.scss';
import Tag from '@/src/components/atoms/tag/tag';

type ProjectProps = {
  title: string;
  period: string;
  description: string;
  cover?: React.ReactNode;
  logo?: React.ReactNode;
  stack: { label: string; icon?: React.ReactNode }[];
};

const Project = ({
  title,
  period,
  description,
  cover,
  logo,
  stack,
}: ProjectProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        {cover}
        {logo && <div className={styles.logo}>{logo}</div>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.period}>{period}</span>
        <p className={styles.description}>{description}</p>

        <ul className={styles.stack}>
          {stack.map((item, index) => (
            <Tag key={index} color={'white'} title={item.label} />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Project;
