import Image from 'next/image';
import styles from './introPhoto.module.scss';
import cn from 'classnames';

type IntroPhotoProps = {
  visible: boolean;
};

const IntroPhoto = ({ visible }: IntroPhotoProps) => {
  return (
    <div className={cn(styles.wrapper, { [styles.visible]: visible })}>
      <Image
        src="/introPhoto.avif"
        alt="Portrait"
        priority
        fetchPriority={'high'}
        width={800}
        height={1000}
        className={styles.image}
      />
    </div>
  );
};

export default IntroPhoto;
