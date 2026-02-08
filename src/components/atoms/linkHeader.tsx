import styles from './linkHeader.module.scss';
import React from 'react';
import Link from 'next/link';

type LinkHeaderProps = React.ComponentProps<typeof Link>;

const LinkHeader = ({ children, ...props }: LinkHeaderProps) => {
  return (
    <div className={styles.linkContainer}>
      <Link className={styles.link} {...props}>
        <span className={styles.label}>{children}</span>
      </Link>
    </div>
  );
};

export default LinkHeader;
