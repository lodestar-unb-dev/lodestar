import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.blueDark};
    padding: 80px 20px;
    color: ${({ theme }) => theme.colors.black0};
    
    > div {
      max-width: 1120px;
      margin: 0 auto;

      display: flex;
      flex-direction: column;

      h3 {
        align-self: center;
        font-size: 2.5rem;
        text-transform: uppercase;
        margin-bottom: 40px;
      }
    }
`;

export const Description = styled.div`
  p {
    text-align: justify;
    line-height: 26px;
  }

  p + p {
    margin-top: 20px;
  }
`;

export const Selectors = styled.div`
  margin: 80px 0 24px;
  display: flex;
  gap: 16px;

  @media(max-width: 640px) {
    display: none;
  }
`;

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media(max-width: 640px) {
    display: none;
  }
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

  > h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.black0};
  }

  > div {
    background-color: white;
    border: 3px solid ${({ theme }) => theme.colors.green};
    border-radius: 4px;
    padding: 12px;

    > span {
      color: ${({ theme }) => theme.colors.green};
      font-weight: bold;
      display: block;
      text-align: center;
    }
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
    color: ${({ theme }) => theme.colors.black0};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 3px solid ${({ theme }) => theme.colors.green};

    * {
      font-size: 1rem;
    }

    th {
      text-align: left;
      font-weight: normal;
      text-align: center;
      padding: 10px;
      background-color: ${({ theme }) => theme.colors.green};
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
      color: ${({ theme }) => theme.colors.blueLight};
    }

    tr:nth-child(odd) {
      background-color: ${({ theme }) => theme.colors.black10};
      color: ${({ theme }) => theme.colors.blueLight};
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

export const SmallScreen = styled.div`
  display: none;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 80px auto 0;

  @media(max-width: 640px) {
    display: block;
  }
`;

export const Error = styled.button`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: #dc3545;
  margin: 40px auto 0;
  border-radius: 4px;
  padding: 8px 4px;
  color: white;
`;

export const Loading = styled.span`
  display: flex;
  gap: 8px;  
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.black0};
  margin: 40px auto 0;
  border-radius: 4px;
  padding: 8px 4px;
  color: ${({ theme }) => theme.colors.blue};

  svg {
    animation: ${loadingAnimation} 2s linear infinite;
  }
`;