import React from 'react';
import styles from './skillBlock.module.scss';
import cn from 'classnames';
import Tag, { TagColor } from '@/src/components/atoms/tag/tag';
import { SkillsBlock_strapi } from '@/src/lib/api-types/home-page';

export type ServiceBlockProps = SkillsBlock_strapi & {
  titlePosition?: 'left' | 'center';
  svg?: React.ReactNode;
  graphSVG?: React.ReactNode;
  color?: TagColor;
  className?: string;
};

const SkillBlock = ({
  title,
  skillList,
  svg,
  titlePosition = 'left',
  color = 'purple',
  className,
  graphSVG,
}: ServiceBlockProps) => {
  return (
    <article className={cn(styles.card, styles[color], className)}>
      <div
        className={cn(styles.header, {
          [styles.center]: titlePosition === 'center',
        })}
      >
        {svg && <div className={styles.icon}>{svg}</div>}
        <h3 className={styles.title}>{title}</h3>
      </div>

      {graphSVG && <div className={styles.chart}>{graphSVG}</div>}

      {skillList && skillList.length > 0 && (
        <ul className={styles.tags}>
          {skillList.map(({ title, id }) => (
            <Tag
              as={'li'}
              key={id}
              title={title}
              color={color}
              className={styles.tag}
            />
          ))}
        </ul>
      )}
    </article>
  );
};

export default SkillBlock;
