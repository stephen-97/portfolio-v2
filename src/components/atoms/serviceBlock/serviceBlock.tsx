import React from 'react';
import styles from './serviceBlock.module.scss';
import cn from 'classnames';

export type ServiceColor = 'purple' | 'blue' | 'green' | 'orange' | 'white';

export type ServiceBlockProps = {
  title: string;
  tags: string[];
  svg?: React.ReactNode;
  color?: ServiceColor;
  className?: string;
};

const ServiceBlock = ({
  title,
  tags,
  svg,
  color = 'purple',
  className,
}: ServiceBlockProps) => {
  return (
    <article className={cn(styles.card, styles[color], className)}>
      <div className={styles.header}>
        {svg && <div className={styles.icon}>{svg}</div>}
        <h3 className={styles.title}>{title}</h3>
      </div>

      <ul className={styles.tags}>
        {tags.map((tag, index) => (
          <li key={index} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ServiceBlock;
