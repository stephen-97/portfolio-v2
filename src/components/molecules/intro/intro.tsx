import React from 'react';
import styles from './intro.module.scss';
import LinkDownload from '@/src/components/atoms/linkDownload/linkDownload';
import { AppLocale } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';
import cn from 'classnames';

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
        <p className={cn(styles.kicker, styles.introItem)}>{subtitle}</p>

        <h1 className={cn(styles.title, styles.introItem)}>{title}</h1>

        <p className={cn(styles.description, styles.introItem)}>
          {description}
        </p>

        <div className={styles.introItem}>
          <LinkDownload
            href={`${locale}/resume.pdf`}
            title={t('hero.resume-link-label')}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
