import React from 'react';
import styles from './title.module.scss';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  children: React.ReactNode;
  as?: HeadingTag;
  index?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  children,
  as = 'h2',
  index,
  className = '',
}) => {
  const Component = as;

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Component className={styles.title}>
        {index && <span className={styles.index}>{index}</span>}
        {children}
      </Component>
      <span className={styles.line} />
    </div>
  );
};

export default Title;
