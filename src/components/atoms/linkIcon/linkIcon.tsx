import styles from './linkIcon.module.scss';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import cn from 'classnames';
import Icon from '@/src/components/atoms/icon/icon';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkIconProps = LinkProps &
  AnchorProps & {
    iconName: string;
    className?: string;
  };

const LinkIcon = ({ href, iconName, className, ...rest }: LinkIconProps) => {
  return (
    <Link
      href={href}
      className={cn(styles.link, className, {
        [styles.npm]: iconName.toLowerCase() === 'npm',
      })}
      {...rest}
    >
      <Icon name={iconName} />
    </Link>
  );
};

export default LinkIcon;
