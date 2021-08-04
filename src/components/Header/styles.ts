import styled, { css } from 'styled-components';

type HeaderNavProps = {
  active: boolean;
}

export const HeaderContainer = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;

  background-color: ${props => props.theme.colors.blueDark};
  border-bottom: 1px solid ${props => props.theme.colors.blueLight};

  section {
    max-width: 1120px;
    margin: 0 auto;
    padding: 18px 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.img`
  height: 36px;
`;

export const HeaderLink = styled.a<HeaderNavProps>`
  color: ${props => props.theme.colors.black25};

  font-size: 1.125rem;

  transition: color 0.2s;

  ${props => props.active && css`
    color: ${props => props.theme.colors.black5};
    font-weight: 500;
  `}

  &:hover {
    color: ${props => props.theme.colors.black5};
  }

  & + a {
    margin-left: 60px;
  }
`;