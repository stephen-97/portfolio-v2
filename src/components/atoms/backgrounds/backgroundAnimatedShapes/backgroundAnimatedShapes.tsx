'use client';

import styles from './backgroundAnimatedShapes.module.scss';
import { DottedSVG } from '@/src/lib/svg';

const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      <DottedSVG className={styles.dotted} />
    </div>
  );
};

export default AnimatedBackground;
