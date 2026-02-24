import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Hero from '@/src/components/organisms/hero/hero';
import Services from '@/src/components/organisms/services/services';
import Projects from '@/src/components/organisms/projects/projects';
import AboutMe from '@/src/components/organisms/aboutMe/aboutMe';
import Works from '@/src/components/organisms/works/works';
import Footer from '@/src/components/organisms/footer/footer';
import { getNavigation } from '@/src/lib/strapi';
import { Navigation_strapi } from '@/src/lib/api-types/strapi-types';

const Home = async () => {
  const navigation: Navigation_strapi = await getNavigation();

  const quickLinks = navigation.links;
  const socialMediaLinks = navigation.mediaLinks;

  return (
    <>
      <Header quickLinks={quickLinks} />
      <CursorHalo />
      <main className={styles.main}>
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <Works />
      </main>
      <Footer quickLinks={quickLinks} socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default Home;
