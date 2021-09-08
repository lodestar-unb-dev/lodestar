import styled from 'styled-components';

export const RadioBanner = styled.section`
  background-image: url("/radio_amateur_banner.webp");
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
      text-transform: uppercase;
      font-size: 3.5rem;
    }

    div {
      max-width: 45%;
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
    text-transform: uppercase;
    font-size: 2.5rem;
  }

  nav {
    display: flex;
    gap: 60px;

    button {
      font-size: 1.5rem;
      padding: 10px;
      border-radius: 12px;
      
      transition: 0.4s;
    }
  }

  div {
    padding: 24px;
    background-color: ${({ theme }) => theme.colors.black0};
    border-radius: 12px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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