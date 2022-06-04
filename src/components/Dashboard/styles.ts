import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 80px auto;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.blue};

  display: flex;
  flex-direction: column;

  h3 {
    align-self: center;
    font-size: 2.5rem;
  }
`;

export const Selectors = styled.div`
  margin: 40px 0 24px;
  display: flex;
  gap: 12px;
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Summary = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blueDarker};
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 10px 32px;
  border-radius: 4px;
  
  gap: 8px;
`;

export const Title = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black75};
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 24px;
`;

export const Chart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blueDarker};
  }

  div {
    background-color: white;
    border-radius: 4px;
    padding: 12px 12px 12px 3px;
  }

  .recharts-yAxis .recharts-label {
    transform: rotate(-90deg) translate(-420px, -200px);
  }
`;

export const Table = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.blueDarker};
  }

  table {
    width: 100%;
    border-collapse: collapse;

    * {
      font-size: 1rem;
    }

    th {
      text-align: left;
      font-weight: normal;
      text-align: center;
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.black0};
    }

    th:first-child {
      border-top-left-radius: 4px;
    }

    th:last-child {
      border-top-right-radius: 4px;
    }

    td {
      padding: 10px;
      text-align: center;
    }

    tr:nth-child(even) {
      background-color: ${({ theme }) => theme.colors.black0};
    }

    tr:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.black10};
    }

    tr:last-child td:first-child {
      border-bottom-left-radius: 4px;
    }

    tr:last-child td:last-child {
      border-bottom-right-radius: 4px;
    }
  }

  footer {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 12px;

    button {
      all: unset;
      display: flex;
      align-items: center;
    }
  }
`;