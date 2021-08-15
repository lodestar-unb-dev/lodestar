import styled from 'styled-components';

export const AlfacruxBanner = styled.section`
  background-image: url("/alfacrux_banner.webp");
  background-size: cover;
  background-position: center;
  height: 480px;
`;

export const AlfacruxBio = styled.section`
  background-color: #00244B;

  padding: 50px 0;

  div {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;

    h1 {
      font-weight: 500;
      font-size: 60px;
      margin-bottom: 50px;

      text-align: center;
    }

    aside {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      div {
        text-align: justify;

        p {
          font-size: 18px;
          line-height: 26px;
        }

        p + p {
          margin-top: 20px;
        }
      }
    }

    img {
      margin-left: 50px;
      width: 45%;
    }
  }
`;

export const AlfacruxWhy = styled.section`
  max-width: 1120px;
  padding: 50px 20px;
  margin: 0 auto;

  h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 50px;

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
  background-color: #00244B;

  padding: 50px 0;

  h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 50px;

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
  padding: 50px 20px;
  margin: 0 auto;

  h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 50px;

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
        padding-left: 16px;
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
          padding: 18px 20px;

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
  background-color: #00244B;

  padding: 50px 0;

  h2 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 50px;

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
        color: #00244B;

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