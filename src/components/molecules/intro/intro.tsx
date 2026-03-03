import React from 'react';
import styles from './intro.module.scss';
import LinkDownload from '@/src/components/atoms/linkDownload/linkDownload';
import { AppLocale } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';

type IntroProps = {
  subtitle: string;
  title: string;
  description: string;
  locale: AppLocale;
};

const Intro = ({ subtitle, title, description, locale }: IntroProps) => {
  const t = useTranslations('page-content');

  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <p className={styles.kicker}>{subtitle}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <LinkDownload
          href={`${locale}/resume.pdf`}
          title={t('hero.resume-link-label')}
        />
      </div>
    </section>
  );
};

export default Intro;
