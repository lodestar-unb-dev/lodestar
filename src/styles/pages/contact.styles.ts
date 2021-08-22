import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black10};
  height: 90vh;
  min-height: 37.5rem;

  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 80px 0;
  color: ${props => props.theme.colors.blue};

  header {
    margin: 0 auto;
    max-width: 1120px;
    width: 100%;
    padding: 0 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    h2 {
      text-transform: uppercase;
      font-size: 3.5rem;
    }
  }

  section {
    margin: 80px auto 0;
    padding: 0 20px;
    max-width: 1120px;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      list-style: none;

      li, li a {
        display: flex;
        align-items: center;

        svg {
          color: ${props => props.theme.colors.blueDark};
          margin-right: 16px;
          flex-shrink: 0;
        }

        span {
          max-width: 28.125rem;
          text-align: justify;
        }
      }

      li + li {
        margin-top: 20px;
      }
    }
  }

  @media(max-width: 960px) {
    height: auto;

    section {
      flex-direction: column;
      gap: 40px;

      aside, iframe {
        width: 100%;
        height: auto;
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 0;

    header {
      align-items: flex-start;

      h2 {
        font-size: 2.5rem;
      }
    }

    section {
      margin-top: 40px;
      flex-direction: column;
      gap: 40px;

      ul li span {
        max-width: unset;
      }

      aside, iframe {
        width: 100%;
        height: auto;
      }
    }
  }
`;