import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.black100};
  
  display: flex;
  justify-content: center;

  a {
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.black0};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 500;
  }
`;