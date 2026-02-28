'use client';

import React from 'react';
import styles from './project.module.scss';
import Tag from '@/src/components/atoms/tag/tag';

import { ProjectBlock_strapi } from '@/src/lib/api-types/home-page';
import LinkIcon from '@/src/components/atoms/linkIcon/linkIcon';

type ProjectProps = ProjectBlock_strapi;

const Project = ({ title, description, skills, links }: ProjectProps) => {
  const hasLinks = links?.length > 0;

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <ul className={styles.stack}>
          {skills.map((item) => (
            <Tag key={item.id} color="white" title={item.title} />
          ))}
        </ul>

        {hasLinks && (
          <ul className={styles.links} aria-label="Project links">
            {links.map((linkItem) => {
              if (!linkItem.icon) return null;

              return (
                <li key={linkItem.id}>
                  <LinkIcon
                    href={linkItem.href}
                    iconName={linkItem.icon.title}
                    aria-label={`${linkItem.label} - ${title}`}
                    className={styles.link}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </article>
  );
};

export default Project;
