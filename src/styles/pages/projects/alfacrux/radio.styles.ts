import styled from 'styled-components';

export const RadioBanner = styled.section`
  background-image: url("/radio_amateur_banner.webp");
  background-size: cover;

  display: flex;
  align-items: center;

  padding: 80px 0;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;

    img {
      max-height: 200px;
      width: fit-content;
    }

    h2 {
      text-transform: uppercase;
      font-size: 56px;
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
    font-size: 40px;
  }

  nav {
    display: flex;
    gap: 60px;

    button {
      font-size: 24px;
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
`;