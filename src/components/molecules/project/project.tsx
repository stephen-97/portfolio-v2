import React from 'react';
import styles from './project.module.scss';
import Tag from '@/src/components/atoms/tag/tag';
import Link from 'next/link';
import cn from 'classnames';
import { ProjectBlock_strapi } from '@/src/lib/api-types/home-page';

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
            {links.map((linkItem) => (
              <li key={linkItem.id}>
                <Link
                  href={linkItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(styles.link)}
                  aria-label={`${linkItem.label} - ${title}`}
                >
                  {linkItem.icon?.SVG?.map((svg, index) => (
                    <svg key={index} aria-hidden="true" focusable="false">
                      {svg.children.map((child, i) => (
                        <text key={i}>{child.text}</text>
                      ))}
                    </svg>
                  ))}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default Project;
