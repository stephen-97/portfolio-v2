import styles from './floatingShapesBackground.module.scss';
import cn from 'classnames';
import { RocketSVG, StarSVG, BulbSVG, CodeSVG } from '@/src/lib/svg';

const FloatingShapesBackground = () => {
  return (
    <div className={styles.floatingShapesBackground}>
      <div className={cn(styles.floatingShape, styles.floatingCircle)} />

      <div className={cn(styles.floatingShape, styles.floatingBulb)}>
        <BulbSVG />
      </div>

      <div className={cn(styles.floatingShape, styles.floatingCode)}>
        <CodeSVG />
      </div>

      <div className={cn(styles.floatingShape, styles.floatingStar)}>
        <StarSVG />
      </div>

      <div className={cn(styles.floatingShape, styles.floatingRocket)}>
        <RocketSVG />
      </div>
    </div>
  );
};

export default FloatingShapesBackground;
