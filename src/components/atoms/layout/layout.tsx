import React from 'react';
import styles from './layout.module.scss';
import cn from 'classnames';

export type LayoutProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof HTMLElementTagNameMap;
  innerClassName?: string;
  backgroundChildren?: React.ReactNode;
  variant?: 'md' | 'lg';
};

const Layout = ({
  as = 'section',
  className,
  children,
  innerClassName,
  backgroundChildren,
  variant = 'md',
  ...rest
}: LayoutProps) => {
  const Element = as as React.ElementType;

  return (
    <Element
      className={cn(styles.layout, className, {
        [styles.lg]: variant === 'lg',
      })}
      {...rest}
    >
      {backgroundChildren}
      <div className={cn(styles.layoutChildren, innerClassName)}>
        {children}
      </div>
    </Element>
  );
};

export default Layout;
