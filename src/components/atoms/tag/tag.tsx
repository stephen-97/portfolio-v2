import React from 'react';
import styles from './tag.module.scss';
import cn from 'classnames';

export type TagColor = 'purple' | 'blue' | 'green' | 'orange' | 'white';

export type ServiceBlockProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof HTMLElementTagNameMap;
  title: string;
  color?: TagColor;
};

const Tag = ({
  as = 'li',
  title,
  color = 'white',
  className,
  ...rest
}: ServiceBlockProps) => {
  const Element = as as React.ElementType;

  return (
    <Element className={cn(styles.tag, styles[color], className)} {...rest}>
      {title}
    </Element>
  );
};

export default Tag;
