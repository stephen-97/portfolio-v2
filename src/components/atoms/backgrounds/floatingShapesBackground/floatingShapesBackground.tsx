'use client';

import styles from './floatingShapesBackground.module.scss';
import cn from 'classnames';

const FloatingShapesBackground = () => {
  return (
    <div className={styles.background}>
      <div className={cn(styles.shape, styles.circleLarge)} />
      <div className={cn(styles.shape, styles.circleSmall)} />
      <div className={cn(styles.shape, styles.square)} />
      <div className={cn(styles.shape, styles.squareSmall)} />
      <div className={cn(styles.shape, styles.circleTiny)} />
      <div className={cn(styles.glow, styles.glowOne)} />
    </div>
  );
};

export default FloatingShapesBackground;
