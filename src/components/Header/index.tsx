import Link from 'next/link';

import styles from './styles.module.scss';

interface HeaderProps {
  activePage?: string;
}

export function Header ({ activePage }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <section>
        <div className={styles.headerLogo}>
          <img src="/logo.webp" alt="logo" />
          <h1>LODESTAR UnB</h1>
        </div>

        <nav className={styles.headerNav}>
          <Link href='/'>
            <a className={activePage === 'home' ? styles.headerActivePage : ''}>Home</a>
          </Link>

          <Link href='/missions'>
            <a className={activePage === 'missions' ? styles.headerActivePage : ''}>Missions</a>
          </Link>

          <Link href='/about'>
            <a className={activePage === 'about' ? styles.headerActivePage : ''}>About</a>
          </Link>

          <Link href='/contact'>
            <a className={activePage === 'contact' ? styles.headerActivePage : ''}>Contact</a>
          </Link>
        </nav>
      </section>
    </header>
  )
}