import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Hero from '@/src/components/organisms/hero/hero';
import Services from '@/src/components/organisms/services/services';
import Projects from '@/src/components/organisms/projects/projects';
import AboutMe from '@/src/components/organisms/aboutMe/aboutMe';
import Works from '@/src/components/organisms/works/works';
import Footer from '@/src/components/organisms/footer/footer';

export default function Home() {
  return (
    <>
      <Header />
      <CursorHalo />
      <main className={styles.main}>
        <Hero />
        <AboutMe />
        <Services />
        <Projects />
        <Works />
      </main>
      <Footer />
    </>
  );
}
