import styled, { css } from 'styled-components';

type ContainerProps = {
  highlightColor: 'blue' | 'green' | 'black'
}

export const Container = styled.a<ContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 334px;
  min-width: 334px;
  background-color: ${props => props.theme.colors.black5};
  
  justify-self: center;

  border-radius: 12px;

  transition: .2s;

  &:hover {
    opacity: 0.85;
  }

  section {
    margin: 30px 0 0 30px;

    h3 {
      font-size: 32px;

      margin-bottom: 10px;
    }

    span {
      display: inline-block;
      color: ${props => props.theme.colors.black5};

      padding: 10px;
      border-radius: 12px;

      ${props => props.highlightColor === 'black' && css`
        background-color: ${props => props.theme.colors.black100};
      `}

      ${props => props.highlightColor === 'green' && css`
        background-color: ${props => props.theme.colors.green};
      `}

      ${props => props.highlightColor === 'blue' && css`
        background-color: ${props => props.theme.colors.blue};
      `}
    }
  }
  
  img {
    margin-left: auto;
    margin-top: -30px;

    width: 240px;
    height: 240px;

    object-fit: cover;
    object-position: top;
  }

  div {
    height: 100%;
    padding: 16px;
    color: ${props => props.theme.colors.black5};

    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    ${props => props.highlightColor === 'black' && css`
      background-color: ${props => props.theme.colors.black100};
    `}

    ${props => props.highlightColor === 'green' && css`
      background-color: ${props => props.theme.colors.green};
    `}

    ${props => props.highlightColor === 'blue' && css`
      background-color: ${props => props.theme.colors.blue};
    `}
  }
`;