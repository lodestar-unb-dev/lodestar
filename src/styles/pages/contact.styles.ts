import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black10};
  height: 90vh;
  min-height: 600px;

  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 80px 20px;
  color: ${props => props.theme.colors.blue};

  header {
    margin: 0 auto;
    max-width: 1120px;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    h2 {
      text-transform: uppercase;
      font-size: 56px;
    }

    p {
      font-size: 18px;
    }
  }

  section {
    margin: 80px auto 0;
    padding: 0 20px;
    max-width: 1120px;
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      list-style: none;

      li, li a {
        display: flex;
        align-items: center;

        svg {
          color: ${props => props.theme.colors.blueDark};
          margin-right: 16px;
        }

        span {
          max-width: 450px;
        }
      }

      li + li {
        margin-top: 20px;
      }
    }
  }
`;