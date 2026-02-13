import styles from './linkHeader.module.scss';
import React from 'react';
import Link from 'next/link';

type LinkHeaderProps = React.ComponentProps<typeof Link>;

const LinkHeader = ({ children, ...props }: LinkHeaderProps) => {
  return (
    <Link className={styles.link} {...props}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
};

export default LinkHeader;
