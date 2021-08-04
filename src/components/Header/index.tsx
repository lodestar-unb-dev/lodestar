import Link from 'next/link';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderLink
} from './styles';

interface HeaderProps {
  activePage: string;
}

export function Header ({ activePage }: HeaderProps) {
  return (
    <HeaderContainer>
      <section>
        <nav>
          <Link href='/' passHref>
            <HeaderLink active={activePage === '/'}>Home</HeaderLink>
          </Link>

          <Link href='/projects' passHref>
            <HeaderLink active={activePage.search(new RegExp('^/projects')) !== -1}>Projects</HeaderLink>
          </Link>
        </nav>

        <HeaderLogo src="/favicon.png" alt="icon" />

        <nav>
          <Link href='/about' passHref>
            <HeaderLink active={activePage === '/about'}>About</HeaderLink>
          </Link>

          <Link href='/contact' passHref>
            <HeaderLink active={activePage === '/contact'}>Contact</HeaderLink>
          </Link>
        </nav>
      </section>
    </HeaderContainer>
  )
}