import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Footer from '@/src/components/organisms/footer/footer';
import {
  getHomePage,
  getNavigation,
  getResume,
  mapLocaleToStrapi,
} from '@/src/lib/strapi';
import HomeContent from '@/src/components/templates/homeContent';
import { AppLocale } from '@/app/[locale]/layout';

type HomeProps = {
  params: {
    locale: AppLocale;
  };
};

const Home = async ({ params }: HomeProps) => {
  const { locale } = await params;
  const strapiLocale = mapLocaleToStrapi(locale);

  const navigation = await getNavigation(strapiLocale);
  const homePage = await getHomePage(strapiLocale);

  const quickLinks = navigation.links;
  const socialMediaLinks = navigation.mediaLinks;

  return (
    <>
      <Header quickLinks={quickLinks} />
      <main className={styles.main}>
        <HomeContent
          homePage={homePage}
          quickLinks={quickLinks}
          locale={locale}
        />
      </main>
      <Footer quickLinks={quickLinks} socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default Home;
