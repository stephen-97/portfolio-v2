import Image from 'next/image';
import styles from './introPhoto.module.scss';

const IntroPhoto = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/introPhoto.png"
        alt="Portrait"
        priority
        width={800}
        height={1000}
        className={styles.image}
      />
    </div>
  );
};

export default IntroPhoto;
