import styled from 'styled-components';

export const AlfacruxBanner = styled.section`
  background-image: url("/alfacrux_banner.webp");
  background-size: cover;
  background-position: center;
  min-height: 31.25rem;

  position: relative;
  display: flex;
  align-items: center;

  > div {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  img {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 1;
    max-width: 100px;
  }

  @media(max-width: 560px) {
    min-height: 20rem;
  }
`;

export const AlfacruxBio = styled.section`
  background-color: ${({ theme }) => theme.colors.blueDarker };;
  padding: 80px 0;

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 40px;
      text-transform: uppercase;
    }

    p {
      line-height: 140%;
      text-align: justify;
    }

    aside {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 60px;
      margin-bottom: 40px;
    }

    img {
      width: 45%;
      border-radius: 8px;
    }
  }

  @media(max-width: 960px) {
    div {
      aside {
        flex-direction: column;
        gap: 40px;

        img {
          width: 450px;
        }
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 0;

    div {
      align-items: flex-start;

      h2 {
        text-align: left;
        font-size: 2rem;
        margin-bottom: 24px;
      }

      aside img {
        width: 100%;
      }
    }
  }
`;

export const AlfacruxWhy = styled.section`
  max-width: 1120px;
  padding: 80px 20px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-transform: uppercase;

    text-align: center;
  }

  p {
    text-align: justify;
    line-height: 26px;
  }

  p + p {
    margin-top: 20px;
  }

  @media(max-width: 560px) {
    padding: 40px 20px;

    h2 {
      text-align: left;
      font-size: 2rem;
      margin-bottom: 24px;
    }
  }
`;

export const AlfacruxGallery = styled.section`
  background-color: ${({ theme }) => theme.colors.blueDarker };;

  padding: 80px 0;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-transform: uppercase;

    text-align: center;
  }

  > div {
    max-width: 1120px;
    margin: 0 auto;

    > div {
      margin: 0 40px;
      padding: 0 20px;

      button::before {
        color:white !important;
      }

      img {
        height: 14.375rem;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 0;

    h2 {
      padding: 0 20px;
      text-align: left;
      font-size: 2rem;
      margin-bottom: 24px;
    }
  }
`;

export const AlfacruxRadioAmateur = styled.section`
  max-width: 1120px;
  padding: 80px 20px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-transform: uppercase;

    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
      p {
        font-size: 1.375rem;
        line-height: 32px;
        color: #F5F5F5;
      }

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: #F5F5F5;
        width: fit-content;

        margin-top: 40px;
        padding-left: 20px;
        border-radius: 6px;
        border: 0;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(1.1);
        }

        span {
          font-size: 1.25rem;
          font-weight: 500;
          color: #00822D;
        }

        div {
          margin-left: 20px;
          padding: 20px;

          background-color: #00822D;
          color: #F5F5F5;

          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
    }

    img {
      width: 100%;
      max-width: 439px;
    }
  }

  @media(max-width: 960px) {
    div {
      flex-direction: column-reverse;
      align-items: center;
      gap: 40px;

      aside {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 20px;

    h2 {
      text-align: left;
      font-size: 2rem;
      margin-bottom: 24px;
    }

    div aside p {
      font-size: 1.25rem;
    }
  }
`;

export const AlfacruxRecentActivities = styled.section`
  background-color: ${({ theme }) => theme.colors.blueDarker };;

  padding: 80px 0;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    text-transform: uppercase;
    padding: 0 20px;

    text-align: center;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    max-width: 1120px;
    padding: 0 20px;
    margin: 0 auto;

    div {
      max-width: 510px;
      flex: 1;

      border-radius: 6px;
      background-color: #F5F5F5;

      iframe {
        width: 100%;
        max-width: 510px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      aside {
        padding: 20px;
        color: ${({ theme }) => theme.colors.blueDarker };;

        h3 {
          font-weight: 500;

          margin-bottom: 12px;
        }

        p {
          font-size: 0.875rem;
          line-height: 22px;
        }
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 0;

    section {
      flex-direction: column;
      align-items: center;

      div aside {
        padding: 12px;
      }
    }

    h2 {
      text-align: left;
      font-size: 2rem;
      margin-bottom: 24px;
    }
  }
`;