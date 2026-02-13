import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';
import Hero from '@/src/components/organisms/hero/hero';

export default function Home() {
  return (
    <>
      <Header />
      <CursorHalo />
      <main className={styles.main}>
        <Hero />
        <Hero />
      </main>
    </>
  );
}
