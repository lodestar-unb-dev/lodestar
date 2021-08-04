import Link from 'next/link';

import styles from './styles.module.scss';

interface HeaderProps {
  activePage: string;
}

export function Header ({ activePage }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <section>
        <nav className={styles.headerNav}>
          <Link href='/'>
            <a className={activePage === '/' ? styles.headerActivePage : ''}>Home</a>
          </Link>

          <Link href='/projects'>
            <a className={activePage.search(new RegExp('^/projects')) !== -1 ? styles.headerActivePage : ''}>Projects</a>
          </Link>
        </nav>

        <img className={styles.headerLogo} src="/favicon.png" alt="icon" />

        <nav className={styles.headerNav}>
          <Link href='/about'>
            <a className={activePage === '/about' ? styles.headerActivePage : ''}>About</a>
          </Link>

          <Link href='/contact'>
            <a className={activePage === '/contact' ? styles.headerActivePage : ''}>Contact</a>
          </Link>
        </nav>
      </section>
    </header>
  )
}