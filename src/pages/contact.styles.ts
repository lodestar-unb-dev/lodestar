import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.blueDark};
  height: 100vh;

  display: flex;
  justify-content: center;

  padding-top: 120px;
`;