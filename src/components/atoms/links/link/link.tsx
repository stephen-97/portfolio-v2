import styles from './link.module.scss';
import React from 'react';
import NextLink from 'next/link';
import cn from 'classnames';

type LinkProps = React.ComponentProps<typeof NextLink> & {
  variant?: 'primary' | 'secondary';
};

const Link = ({
  children,
  className,
  variant = 'primary',
  ...props
}: LinkProps) => {
  return (
    <NextLink
      className={cn(styles.link, styles[variant], className)}
      {...props}
    >
      <span className={styles.label}>{children}</span>
    </NextLink>
  );
};

export default Link;
