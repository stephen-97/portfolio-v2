import styles from './avatar.module.scss';
import { RaySun } from '@/src/lib/svg';

type AvatarProps = {
  src: string;
  alt?: string;
};

export default function Avatar({ src, alt = '' }: AvatarProps) {
  return (
    <div className={styles.avatar}>
      <RaySun className={styles.rays} />

      <div className={styles.circle}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}
