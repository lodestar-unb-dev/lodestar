import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.blueDark };
  background-color: ${({ theme }) => theme.colors.black10 };

  > h1 {
    text-transform: uppercase;
    font-size: 56px;
    padding-top: 60px;
  }
`;

export const AlfacruxUpdatesCalendar = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 60px;
  gap: 40px;
  padding: 0 40px 60px;

  > aside {
    width: 100%;
    max-width: 400px;

    > h2 {
      text-transform: uppercase;
      font-size: 24px;
    }
  }

  > div {
    width: 100%;
    background-color: white;
  }
`;

export const AlfacruxUpdatesTable = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div {
    max-width: 1120px;
    padding: 40px 20px 0;
    width: 100%;

    > h2 {
      text-transform: uppercase;
      font-size: 40px;
    }

    > span {
      color: ${({ theme }) => theme.colors.black75 };
    }
  }

  > footer {
    display: flex;
    align-items: center;
    margin: 40px 0;
    gap: 8px;

    button {
      background-color: transparent;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.blueDark };
    }

    span {
      margin: 0 8px;
      font-size: 18px;
    }
  }
`;

export const Card = styled.div``;