'use client';

import styles from './linkIcon.module.scss';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import cn from 'classnames';

type LinkIconProps = LinkProps & {
  className?: string;
  children: ReactNode;
};

const LinkIcon = ({ href, className, children, ...rest }: LinkIconProps) => {
  return (
    <Link href={href} className={cn(styles.link, className)} {...rest}>
      {children}
    </Link>
  );
};

export default LinkIcon;
