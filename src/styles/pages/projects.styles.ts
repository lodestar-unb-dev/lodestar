import styled from 'styled-components';
import { Layout } from '../../components/Layout';

type DividerProps = {
  dividerColor: 'blue' | 'greenLight' | 'black10';
}

export const Container = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.black10};

  padding-top: 80px;

  @media(max-width: 560px) {
    padding-top: 40px;  
  }  
`;

export const ProjectsHeader = styled.header`
  margin: 0 auto;
  padding: 0 20px 80px;
  max-width: 1120px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  h2 {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.blue};
  }

  p {
    color: ${({ theme }) => theme.colors.blue};
    text-align: justify;
    & + p {
      margin-top: 1rem;
    }
  }

  @media(max-width: 560px) {
    padding-bottom: 40px;
    align-items: flex-start;

    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const Project = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  gap: 60px;

  h3 {
    font-size: 2.5rem;
  }

  article {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1120px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    &:nth-of-type(odd) {
      flex-direction: row-reverse;

      div {
        align-items: flex-start;
      }
    }

    img {
      max-height: 12.5rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: justify;
      gap: 24px;

      div p + p {
        margin-top: 1rem;
      }

      h4 {
        font-weight: 500;
        font-size: 1.5rem;
      }

      a {
        padding: 20px 46px;
        border-radius: 12px;
        text-transform: uppercase;
        font-weight: 500;

        transition: 0.2s;
      }

      span {
        padding: 20px 46px;
        border-radius: 12px;
        text-transform: uppercase;
        font-weight: 500;

        transition: 0.2s;
      }
    }
  }

  @media(max-width: 560px) {
    padding: 40px 0;
    gap: 30px;

    h3 {
      text-align: center;
      font-size: 2rem;
    }

    article {
      div a, div span {
        padding: 16px;
      }

      img {
        display: none;
      }
    }
  }
`;

export const SpaceMissionProject = styled(Project)`
  background-color: ${({ theme }) => theme.colors.blueDark};

  article div {
    a {
      background-color: ${({ theme }) => theme.colors.green};

      &:hover {
        background-color: ${({ theme }) => theme.colors.greenDark};
      }
    }

    span {
      border: 1px solid ${({ theme }) => theme.colors.green};
    }
  }
`;

export const SmallSATSimulatorProject = styled(Project)`
  background-color: ${({ theme }) => theme.colors.black5};
  color: ${({ theme }) => theme.colors.blue};

  article div {
    a {
      background-color: ${({ theme }) => theme.colors.blue};

      &:hover {
        background-color: ${({ theme }) => theme.colors.blueDark};
      }
    }

    span {
      border: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const HighAltitudeBallooningProject = styled(Project)`
  background-color: ${({ theme }) => theme.colors.green};
  
  article div {
    a {
      color: ${({ theme }) => theme.colors.blue};
      background-color: ${({ theme }) => theme.colors.black5};

      &:hover {
        background-color: ${({ theme }) => theme.colors.black25};
      }
    }

    span {
      border: 1px solid ${({ theme }) => theme.colors.black5};
    }
  }
`;

export const Divider = styled.div<DividerProps>`
  height: 1px;
  
  max-width: 1080px;
  width: 100%;
  background-color: ${({ theme, dividerColor }) => theme.colors[dividerColor] };
`;