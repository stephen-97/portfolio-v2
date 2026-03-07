'use client';

import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './project.module.scss';
import Tag from '@/src/components/atoms/tag/tag';
import { ProjectBlock_strapi } from '@/src/lib/api-types/home-page';
import LinkIcon from '@/src/components/atoms/linkIcon/linkIcon';
import { useTranslations } from 'next-intl';

type ProjectProps = ProjectBlock_strapi;

const Project = ({ title, description, skills, links }: ProjectProps) => {
  const hasLinks = links?.length > 0;
  const t = useTranslations('page-content');

  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const canExpand = !expanded && isOverflowing;

  useEffect(() => {
    const el = descriptionRef.current;
    if (!el) return;

    setIsOverflowing(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p
          ref={descriptionRef}
          className={cn(styles.description, {
            [styles.expanded]: expanded,
            [styles.canExpand]: canExpand,
          })}
        >
          {description}
        </p>

        {!expanded && isOverflowing && (
          <button className={styles.seeMore} onClick={() => setExpanded(true)}>
            {t('projects.project-block.see-more-button-title')}
          </button>
        )}

        <ul className={styles.stack}>
          {skills.map((item) => (
            <Tag key={item.id} color="neutral" title={item.title} />
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
