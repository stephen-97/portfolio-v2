import React from 'react';
import styles from './serviceBlock.module.scss';
import cn from 'classnames';

export type ServiceColor = 'purple' | 'blue' | 'green' | 'orange' | 'white';

export type ServiceBlockProps = {
  title: string;
  titlePosition?: 'left' | 'center';
  tags?: string[];
  svg?: React.ReactNode;
  graphSVG?: React.ReactNode;
  color?: ServiceColor;
  className?: string;
};

const ServiceBlock = ({
  title,
  tags,
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

      {tags && tags.length > 0 && (
        <ul className={styles.tags}>
          {tags.map((tag, index) => (
            <li key={index} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ServiceBlock;
