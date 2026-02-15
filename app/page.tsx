import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Hero from '@/src/components/organisms/hero/hero';
import Services from '@/src/components/organisms/services/services';
import Projects from '@/src/components/organisms/projects/projects';

export default function Home() {
  return (
    <>
      <Header />
      <CursorHalo />
      <main className={styles.main}>
        <Hero />
        <Services />
        <Projects />
      </main>
    </>
  );
}
