import Image from 'next/image';
import styles from './backgroundBlocks.module.scss';

const BackgroundPattern = () => {
  return (
    <Image
      className={styles.backgroundSvg}
      src="/backgroundBlock.svg"
      alt=""
      aria-hidden="true"
      fill
      priority
      style={{ objectFit: 'cover', pointerEvents: 'none' }}
    />
  );
};

export default BackgroundPattern;
