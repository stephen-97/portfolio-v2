// organisms/Header/Header.tsx
import styles from './header.module.scss';
import LinkHeader from '@/src/components/atoms/linkHeader';
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <div className={styles.left}></div>

      <nav className={styles.nav} aria-label="Navigation principale">
        <ul>
          <li>
            <LinkHeader href="#about">Recherche</LinkHeader>
          </li>
          <li>
            <LinkHeader href="#experience">À propos</LinkHeader>
          </li>
          <li>
            <LinkHeader href="#contact">Contact</LinkHeader>
          </li>
        </ul>
      </nav>

      <div className={styles.right}>{/* User menu / Burger menu */}</div>
    </div>
  </header>
);
