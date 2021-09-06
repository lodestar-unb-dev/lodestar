import styled from 'styled-components';

interface HomeBannerProps {
  bgImageUrl: string;
}

export const HomeBanner = styled.section<HomeBannerProps>`
  background-image: url(${({ bgImageUrl }) => bgImageUrl});
  background-size: cover;

  position: relative;
  display: flex;
  align-items: center;

  > div {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(0, 42, 89, 0), rgba(0, 42, 89, 1));
  }

  aside {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    max-width: 1120px;
    margin: 0 auto;
    padding: 80px 20px;

    z-index: 1;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 40px;

      h1 {
        font-weight: 500;
        font-size: 4.5rem;
        margin-left: -5px;
      }

      h3 {
        color: ${({ theme }) => theme.colors.black10};
        font-size: 2.5rem;
      }
    }
  
    img {
      max-width: 19.75rem;
    }

    @media(max-width: 960px) {
      gap: 0;

      > div {
        h1 {
          font-size: 3.5rem;
        }

        h3 {
          font-size: 1.5rem;
        }
      }
      
      img {
        max-width: 15rem;
      }
    }

    @media(max-width: 560px) {
      flex-direction: column;
      padding: 40px 20px;

      > div {
        text-align: center;
      }

      img {
        display: none;
      }
    }
  }
`;

const HomeProject = styled.div`
  section {
    max-width: 1120px;
    margin: 0 auto;
    padding: 80px 20px;

    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 80px;

    > aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      h2 {
        font-size: 2.5rem;
        font-weight: 500;
        text-transform: uppercase;

        margin-bottom: 40px;
      }

      p {
        color: ${props => props.theme.colors.black10};
        text-align: justify;

        & + p {
          margin-top: 1rem;
        }
      }

      div {
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 80px;

        aside {
          display: flex;
          align-items: center;

          svg {
            margin-right: 20px;
          }
        }
      }

      a {
        background-color: ${props => props.theme.colors.green};
        border-radius: 12px;
        margin-top: 50px;
        padding: 20px 50px;
        font-weight: 500;

        text-transform: uppercase;
        transition: .2s;
      }
    }
  }

  @media(max-width: 960px) {      
    section {
      > aside {
        div {
          gap: 40px;
        }
      }

      img {
        display: none;
      }
    }
  }

  @media(max-width: 560px) {
    section {
      padding: 40px 20px;

      > aside {
        div {
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
`;

export const HomeProjectSpaceMission = styled(HomeProject)`
  background-color: ${props => props.theme.colors.blueDark};
  
  section { 
    a:hover {
      background-color: ${props => props.theme.colors.greenDark};
    }
  }
`;

export const HomeProjectSmallSAT = styled(HomeProject)`
  background-color: ${props => props.theme.colors.black5};
  
  section {

    > aside {
      align-items: flex-end;
      color: ${props => props.theme.colors.blueDark};

      p {
        color: ${props => props.theme.colors.blue};
      }

      div {
        color: ${props => props.theme.colors.blue};
      }

      a {
        background-color: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.black5};

        &:hover {
          background-color: ${props => props.theme.colors.blueDark};
        }
      }
    }
  }
`;

export const HomeProjectHighAltitudeBallooning = styled(HomeProject)`
  background-color: ${props => props.theme.colors.green};

  section {
    aside a {
      background-color: ${props => props.theme.colors.black5};
      color: ${props => props.theme.colors.blue};

      &:hover {
        background-color: ${props => props.theme.colors.black25};
      }
    }
  }
`;
