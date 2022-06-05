import styled from 'styled-components';

interface RadioBannerProps {
  bgImageUrl: string;
}

export const RadioBanner = styled.section<RadioBannerProps>`
  background-image: url(${({ bgImageUrl }) => bgImageUrl});
  background-size: cover;
  background-position: right;

  display: flex;
  align-items: center;

  padding: 80px 0;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    img {
      max-height: 12.5rem;
      width: auto;
    }

    h2 {
      font-size: 3.5rem;
    }

    div {
      margin-right: auto;

      p {
        line-height: 140%;
        text-align: justify;
      }

      p + p {
        margin-top: 20px;
        font-weight: 300;
      }
    }
  }

  @media(max-width: 960px) {    
    article {
      gap: 24px;

      h2 {
        text-align: left;
        font-size: 2rem;
      }

      div {
        max-width: 100%;
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 0;

    img {
      height: 9rem;
    }
  }
`;

export const RadioInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.blue};

  h3 {
    font-size: 2.5rem;
  }

  nav {
    display: flex;
    gap: 60px;

    button {
      font-size: 1.5rem;
      padding: 10px;
      border-radius: 12px;
      font-weight: 500;
      
      transition: 0.4s;
    }
  }

  > div {
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.black0};
    border-radius: 12px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    article {
      p {
        text-align: justify;
        line-height: 26px;
      }

      p + p {
        margin-top: 20px;
      }
    }

    > div {
      display: flex;
      align-items: center;
    }
  }

  @media(max-width: 960px) {    
    nav {
      gap: 24px;

      button {
        font-size: 1.25rem;
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 20px;

    nav {
      padding: 10px;
      gap: 0px;

      button {
        font-size: 1rem;
        word-wrap: break-word;
        border-radius: 0;

        &:first-of-type {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        &:last-of-type {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }

    div {
      align-items: flex-start;
    }
  }
`;

export const RadioForm = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.greenDark};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    max-width: 1120px;
    margin: 0 auto;

    h3 {
      font-size: 2.5rem;
      text-transform: uppercase;
    }

    iframe.form {
      width: 100%;
      height: 540px;
      border-radius: 4px;

      @media(max-width: 824px) {
        height: 983px;
      }

      @media(max-width: 730px) {
        height: 1016px;
      }

      @media(max-width: 424px) {
        height: 1050px;
      }

      @media(max-width: 320px) {
        height: 1083px;
      }
    }

    h4 {
      margin-top: 1.5rem;
      font-size: 1.5rem;
      text-align: center;
    }

    iframe.map {
      width: 100%;
      height: 840px;
      border-radius: 4px;
    }
  }
`;

export const ComingNext = styled.section`
  h3 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.blue };

  ul {
    max-width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      text-align: justify;
    }
  }
`;