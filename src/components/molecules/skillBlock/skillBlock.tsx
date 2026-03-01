import React, { useMemo } from 'react';
import styles from './skillBlock.module.scss';
import cn from 'classnames';
import Tag, { TagColor } from '@/src/components/atoms/tag/tag';
import Icon from '@/src/components/atoms/icon/icon';
import { SkillsBlock_strapi } from '@/src/lib/api-types/home-page';

export type ServiceBlockProps = SkillsBlock_strapi & {
  titlePosition?: 'left' | 'center';
  graphSVG?: React.ReactNode;
  color?: TagColor;
  className?: string;
};

const SkillBlock = ({
  title,
  titlePosition = 'left',
  color = 'purple',
  className,
  graphSVG,
  skill,
  description,
  icon_skill,
}: ServiceBlockProps) => {
  const hasSkills = Array.isArray(skill) && skill.length > 0;
  const hasGraph = Boolean(graphSVG);
  const hasGraphAndSkills = hasGraph && hasSkills;

  // ✅ Tri alphabétique optimisé (évite re-tri à chaque render)
  const sortedSkills = useMemo(() => {
    if (!hasSkills) return [];

    return [...skill].sort((a, b) =>
      a.title.localeCompare(b.title, 'fr', {
        sensitivity: 'base', // ignore accents & casse
      }),
    );
  }, [skill, hasSkills]);

  return (
    <article className={cn(styles.card, styles[color], className)}>
      <div
        className={cn(styles.header, {
          [styles.center]: titlePosition === 'center',
        })}
      >
        {icon_skill?.title && (
          <div className={styles.icon}>
            <Icon name={icon_skill.title} />
          </div>
        )}

        <h3 className={styles.title}>{title}</h3>
      </div>

      {description && <p className={styles.description}>{description}</p>}

      {hasGraphAndSkills ? (
        <div className={styles.graphSkillsWrapper}>
          <div className={styles.chart}>{graphSVG}</div>

          <ul className={styles.tags}>
            {sortedSkills.map(({ title, id }) => (
              <Tag
                as="li"
                key={id}
                title={title}
                color={color}
                className={styles.tag}
              />
            ))}
          </ul>
        </div>
      ) : (
        <>
          {hasGraph && <div className={styles.chart}>{graphSVG}</div>}

          {hasSkills && (
            <ul className={styles.tags}>
              {sortedSkills.map(({ title, id }) => (
                <Tag
                  as="li"
                  key={id}
                  title={title}
                  color={color}
                  className={styles.tag}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </article>
  );
};

export default SkillBlock;
