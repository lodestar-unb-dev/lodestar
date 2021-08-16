import { NoScrollLink } from '../NoScrollLink';

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
          <NoScrollLink href='/' passHref>
            <HeaderLink active={activePage === '/'}>Home</HeaderLink>
          </NoScrollLink>

          <NoScrollLink href='/projects' passHref>
            <HeaderLink active={activePage.search(new RegExp('^/projects')) !== -1}>Projects</HeaderLink>
          </NoScrollLink>
        </nav>

        <HeaderLogo src="/favicon.png" alt="icon" />

        <nav>
          <NoScrollLink href='/about' passHref>
            <HeaderLink active={activePage === '/about'}>About</HeaderLink>
          </NoScrollLink>

          <NoScrollLink href='/contact' passHref>
            <HeaderLink active={activePage === '/contact'}>Contact</HeaderLink>
          </NoScrollLink>
        </nav>
      </section>
    </HeaderContainer>
  )
}