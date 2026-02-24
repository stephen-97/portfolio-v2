import React from 'react';
import styles from './layout.module.scss';
import cn from 'classnames';

export type LayoutProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof HTMLElementTagNameMap;
  innerClassName?: string;
  backgroundChildren?: React.ReactNode;
  variant?: 'xs' | 'sm' | 'md' | 'lg';
  mainPage?: boolean;
};

const Layout = ({
  as = 'section',
  className,
  children,
  innerClassName,
  backgroundChildren,
  variant = 'md',
  mainPage = true,
  ...rest
}: LayoutProps) => {
  const Element = as as React.ElementType;

  return (
    <Element
      className={cn(styles.layout, className, styles[variant], {
        [styles.mainPage]: mainPage,
      })}
      {...rest}
    >
      {backgroundChildren}
      <div className={cn(innerClassName, styles.layoutChildren)}>
        {children}
      </div>
    </Element>
  );
};

export default Layout;
