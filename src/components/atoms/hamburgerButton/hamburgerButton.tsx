import React, { useState } from 'react';
import styles from './hamburgerButton.module.scss';
import cn from 'classnames';

export type TStateHandler<T> = {
  set: React.Dispatch<T>;
  state: T;
};

type HamburgerButtonProps = {
  className?: string;
  onToggle?: (open: boolean) => void;
  openStateHandler: TStateHandler<boolean>;
};

const HamburgerButton = ({
  className,
  onToggle,
  openStateHandler,
}: HamburgerButtonProps) => {
  const isOpen = openStateHandler.state;
  const setIsOpen = openStateHandler.set;

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  return (
    <>
      <button
        type="button"
        aria-label={
          isOpen
            ? 'Fermer le menu de navigation'
            : 'Ouvrir le menu de navigation'
        }
        aria-expanded={isOpen}
        onClick={handleClick}
        className={cn(styles.button, className, {
          [styles.active]: isOpen,
        })}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
    </>
  );
};

export default HamburgerButton;
