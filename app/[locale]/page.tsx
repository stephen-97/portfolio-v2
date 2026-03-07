import styles from './page.module.scss';
import {
  getHomePage,
  getNavigation,
  mapLocaleToStrapi,
} from '@/src/lib/strapi';
import HomeContent from '@/src/components/templates/homeContent';
import { AppLocale } from '@/app/[locale]/layout';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: t('metadata.keywords'),
    authors: [{ name: t('metadata.author') }],
    openGraph: {
      title: t('metadata.openGraph.title'),
      description: t('metadata.openGraph.description'),
      type: 'website',
      siteName: t('metadata.site-name'),
    },
  };
}

type HomeProps = {
  params: Promise<{
    locale: AppLocale;
  }>;
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;

  const strapiLocale = mapLocaleToStrapi(locale);

  const [navigation, homePage] = await Promise.all([
    getNavigation(strapiLocale),
    getHomePage(strapiLocale),
  ]);

  const quickLinks = navigation.links;

  return (
    <main className={styles.main}>
      <HomeContent
        homePage={homePage}
        quickLinks={quickLinks}
        locale={locale}
      />
    </main>
  );
};

export default Home;
