import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Footer from '@/src/components/organisms/footer/footer';
import { getHomePage, getNavigation } from '@/src/lib/strapi';
import { Navigation_strapi } from '@/src/lib/api-types/strapi-types';
import { HomePage_strapi } from '@/src/lib/api-types/home-page';
import HomeContent from '@/src/components/templates/homeContent';

const Home = async () => {
  const navigation: Navigation_strapi = await getNavigation();
  const homePage: HomePage_strapi = await getHomePage();

  const quickLinks = navigation.links;
  const socialMediaLinks = navigation.mediaLinks;

  return (
    <>
      <Header quickLinks={quickLinks} />
      <CursorHalo />
      <main className={styles.main}>
        <HomeContent homePage={homePage} quickLinks={quickLinks} />
      </main>
      <Footer quickLinks={quickLinks} socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default Home;
