import styles from './linkDownload.module.scss';
import cn from 'classnames';

type DownloadButtonProps = {
  href: string;
  className?: string;
  title: string;
};

const LinkDownload = ({ href, className, title }: DownloadButtonProps) => {
  return (
    <span className={cn(styles.wrapper, className)}>
      <a href={href} className={styles.button}>
        <span className={styles.label}>{title}</span>
      </a>
    </span>
  );
};

export default LinkDownload;
