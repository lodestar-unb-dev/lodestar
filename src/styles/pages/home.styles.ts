import styled from 'styled-components';

export const HomeBanner = styled.section`
  background-image: url("/home_banner.webp");
  background-size: cover;
  height: 480px;

  position: relative;
  display: flex;
  align-items: center;

  > div {
    position: absolute;
    height: 480px;
    width: 100%;
    background-image: linear-gradient(rgba(0, 42, 89, 0), rgba(0, 42, 89, 1));
  }

  aside {
    display: flex;
    flex: 1;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;

    z-index: 1;

    div {
      display: flex;
      flex-direction: column;

      justify-content: space-between;
      align-items: flex-start;

      h1 {
        color: var(--black-5);
        font-weight: 500;
        font-size: 72px;
        text-transform: uppercase;
      }

      h3 {
        color: var(--black-5);
        font-weight: 400;
        font-size: 56px;
      }
    }
  
    img {
      max-width: 316px;
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
        font-size: 40px;
        font-weight: 500;
        text-transform: uppercase;

        margin-bottom: 40px;
      }

      p {
        font-size: 24px;
        font-weight: 400;
        color: ${props => props.theme.colors.black10};
        text-align: justify;
      }

      div {
        margin-top: 40px;
        display: flex;
        align-items: center;

        aside {
          display: flex;
          align-items: center;

          svg {
            margin-right: 20px;
          }
        }

        aside + aside {
          margin-left: 80px;
        }
      }

      a {
        background-color: ${props => props.theme.colors.green};
        border-radius: 12px;
        margin-top: 50px;
        padding: 20px 50px;

        text-transform: uppercase;
        transition: .2s;
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
