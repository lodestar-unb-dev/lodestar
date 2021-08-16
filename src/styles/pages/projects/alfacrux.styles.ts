import styled from 'styled-components';

export const AlfacruxBanner = styled.section`
  background-image: url("/alfacrux_banner.webp");
  background-size: cover;
  background-position: center;
  min-height: 500px;

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
    gap: 40px;

    h2 {
      font-size: 40px;
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
    }

    img {
      width: 45%;
      border-radius: 8px;
    }
  }
`;

export const AlfacruxWhy = styled.section`
  max-width: 1120px;
  padding: 80px 20px;
  margin: 0 auto;

  h2 {
    font-size: 40px;
    margin-bottom: 40px;
    text-transform: uppercase;

    text-align: center;
  }

  p {
    text-align: center;
    font-size: 18px;
    line-height: 26px;
  }

  p + p {
    margin-top: 20px;
  }
`;

export const AlfacruxGallery = styled.section`
  background-color: ${({ theme }) => theme.colors.blueDarker };;

  padding: 80px 0;

  h2 {
    font-size: 40px;
    margin-bottom: 40px;
    text-transform: uppercase;

    text-align: center;
  }

  > div {
    max-width: 1120px;
    padding: 0 20px;
    margin: 0 auto;

    button::before {
      color:white !important;
    }

    img {
      height: 230px;
      width: 300px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
`;

export const AlfacruxRadioAmateur = styled.section`
  max-width: 1120px;
  padding: 80px 20px;
  margin: 0 auto;

  h2 {
    font-size: 40px;
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
        font-size: 22px;
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
          font-size: 20px;
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
  }
`;

export const AlfacruxRecentActivities = styled.section`
  background-color: ${({ theme }) => theme.colors.blueDarker };;

  padding: 80px 0;

  h2 {
    font-size: 40px;
    margin-bottom: 40px;
    text-transform: uppercase;

    text-align: center;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    max-width: 1120px;
    padding: 0 20px;
    margin: 0 auto;

    div {
      max-width: 510px;

      border-radius: 6px;
      background-color: #F5F5F5;

      iframe {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      aside {
        padding: 20px;
        color: ${({ theme }) => theme.colors.blueDarker };;

        h3 {
          font-weight: 500;
          font-size: 18px;

          margin-bottom: 12px;
        }

        p {
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
`;