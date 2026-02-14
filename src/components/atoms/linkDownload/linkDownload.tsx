import styles from './linkDownload.module.scss';
import cn from 'classnames';

type DownloadButtonProps = {
  href: string;
  className?: string;
};

const LinkDownload = ({ href, className }: DownloadButtonProps) => {
  return (
    <span className={cn(styles.wrapper, className)}>
      <a href={href} download className={styles.button}>
        <span className={styles.label}>Download CV</span>
      </a>
    </span>
  );
};

export default LinkDownload;
