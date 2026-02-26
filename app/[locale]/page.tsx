import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Hero from '@/src/components/organisms/hero/hero';
import Skills from '@/src/components/organisms/skills/skills';
import Projects from '@/src/components/organisms/projects/projects';
import AboutMe from '@/src/components/organisms/aboutMe/aboutMe';
import Works from '@/src/components/organisms/works/works';
import Footer from '@/src/components/organisms/footer/footer';
import { getHomePage, getNavigation } from '@/src/lib/strapi';
import { Navigation_strapi } from '@/src/lib/api-types/strapi-types';
import { HomePage_strapi } from '@/src/lib/api-types/home-page';

const SECTION_COMPONENTS = {
  hero: Hero,
  about: AboutMe,
  skills: Skills,
  projects: Projects,
  works: Works,
} as const;

const Home = async () => {
  const navigation: Navigation_strapi = await getNavigation();
  const HomePage: HomePage_strapi = await getHomePage();

  const quickLinks = navigation.links;
  const socialMediaLinks = navigation.mediaLinks;

  return (
    <>
      <Header quickLinks={quickLinks} />
      <CursorHalo />
      <main className={styles.main}>
        <Hero />
        {quickLinks.map((link, index) => {
          const sectionId = link.href.replace('#', '');

          const Component =
            SECTION_COMPONENTS[sectionId as keyof typeof SECTION_COMPONENTS];

          if (!Component) return null;

          return <Component key={index} id={sectionId} />;
        })}
      </main>
      <Footer quickLinks={quickLinks} socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default Home;
