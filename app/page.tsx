import Image from 'next/image';
import { Header } from '@/src/components/organisms/header/header';
import styles from './page.module.scss';
import CursorHalo from '@/src/effects/cursorHalo';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <CursorHalo />
      <main className={styles.main}></main>
    </div>
  );
}
