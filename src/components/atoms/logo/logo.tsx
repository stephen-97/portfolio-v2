import styles from './logo.module.scss';
import { LogoSVG } from '@/src/lib/svg';
import cn from 'classnames';

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <a
      className={cn(styles.logoLink, className)}
      href={'/'}
      aria-label={'Link to the main page'}
    >
      <span className={styles.logoMask} aria-hidden="true" />
      <LogoSVG />
    </a>
  );
}
