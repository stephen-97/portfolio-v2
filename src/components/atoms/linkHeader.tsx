import styles from './linkHeader.module.scss';
import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

type LinkHeaderProps = React.ComponentProps<typeof Link>;

const LinkHeader = ({ children, className, ...props }: LinkHeaderProps) => {
  return (
    <Link className={cn(styles.link, className)} {...props}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
};

export default LinkHeader;
