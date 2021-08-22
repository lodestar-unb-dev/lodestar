import styled from 'styled-components';

export const Container = styled.footer`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.blueDark};

  margin-top: auto;

  span {
    font-size: 0.875rem;
  }

  @media(max-width: 560px) {
    padding: 12px;

    span {
      font-size: 0.75rem;
    }
  }
`;