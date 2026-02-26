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

type SectionId = 'about' | 'skills' | 'projects' | 'works';

type SectionRenderProps = {
  id: string;
  homePage: HomePage_strapi;
};

const SECTION_RENDERERS: Record<
  SectionId,
  (props: SectionRenderProps) => JSX.Element
> = {
  about: ({ id, homePage }) => (
    <AboutMe id={id} aboutMeData={homePage.aboutMe} />
  ),
  skills: ({ id, homePage }) => <Skills id={id} skillsData={homePage.skills} />,
  projects: ({ id, homePage }) => (
    <Projects id={id} projectsData={homePage.projects} />
  ),
  works: ({ id, homePage }) => <Works id={id} worksData={homePage.works} />,
};

const Home = async () => {
  const navigation: Navigation_strapi = await getNavigation();
  const homePage: HomePage_strapi = await getHomePage();

  console.log(homePage);
  const quickLinks = navigation.links;
  const socialMediaLinks = navigation.mediaLinks;

  return (
    <>
      <Header quickLinks={quickLinks} />
      <CursorHalo />
      <main className={styles.main}>
        <Hero heroData={homePage.hero} />

        {quickLinks.map((link) => {
          const sectionId = link.href.replace('#', '') as SectionId;
          const render = SECTION_RENDERERS[sectionId];
          if (!render) return null;

          return <div key={link.id}>{render({ id: sectionId, homePage })}</div>;
        })}
      </main>
      <Footer quickLinks={quickLinks} socialMediaLinks={socialMediaLinks} />
    </>
  );
};

export default Home;
