import { getTranslations } from 'next-intl/server';
import styles from './not-found.module.scss';

const NotFound = async () => {
  const t = await getTranslations('not-found');

  return (
    <main className={styles.notFound}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.text}>{t('subtitle')}</p>
      <p className={styles.text}>{t('description')}</p>
    </main>
  );
};

export default NotFound;
