import React from 'react';
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
  console.log('ici', icon_skill?.title);
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

      {graphSVG && <div className={styles.chart}>{graphSVG}</div>}

      {description && <p>{description}</p>}

      {skill && skill.length > 0 && (
        <ul className={styles.tags}>
          {skill.map(({ title, id }) => (
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
    </article>
  );
};

export default SkillBlock;
