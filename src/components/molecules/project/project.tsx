import React from 'react';
import styles from './project.module.scss';
import Tag from '@/src/components/atoms/tag/tag';
import Link from 'next/link';
import { GitHubSVG, NpmSVG, ExternalLinkSVG } from '@/src/lib/svg';
import cn from 'classnames';

type ProjectLinks = {
  github?: string;
  npm?: string;
  live?: string;
};

type ProjectProps = {
  title: string;
  role: string;
  period: string;
  description: string;
  stack: { label: string; icon?: React.ReactNode }[];
  links?: ProjectLinks;
};

const Project = ({
  title,
  role,
  period,
  description,
  stack,
  links,
}: ProjectProps) => {
  const hasLinks = !!(links?.github || links?.npm || links?.live);

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.role}>{role}</div>
        <div className={styles.period}>{period}</div>
        <p className={styles.description}>{description}</p>

        <ul className={styles.stack}>
          {stack.map((item) => (
            <Tag key={item.label} color="white" title={item.label} />
          ))}
        </ul>

        {hasLinks && (
          <ul className={styles.links} aria-label="Project links">
            {links?.github && (
              <li>
                <Link
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`View ${title} source code on GitHub`}
                >
                  <GitHubSVG aria-hidden="true" focusable="false" />
                </Link>
              </li>
            )}

            {links?.npm && (
              <li>
                <Link
                  href={links.npm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(styles.link, styles.linkNpm)}
                  aria-label={`View ${title} package on NPM`}
                >
                  <NpmSVG aria-hidden="true" focusable="false" />
                </Link>
              </li>
            )}

            {links?.live && (
              <li>
                <Link
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`Visit ${title} live project`}
                >
                  <ExternalLinkSVG aria-hidden="true" focusable="false" />
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
};

export default Project;
