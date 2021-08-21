import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black10};
  color: ${props => props.theme.colors.blue};
`;

export const Overview = styled.section`
  background-color: ${props => props.theme.colors.black5};

  header {
    max-width: 1120px;
    padding: 80px 20px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h2 {
      font-size: 3.5rem;
      text-transform: uppercase;
      color: ${props => props.theme.colors.blue};
    }

    p {
      text-align: center;
    }

    strong {
      font-weight: 500;
    }
  }
`;

export const TeamMembersContainer = styled.section`
  max-width: 1120px;
  padding: 80px 20px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  header {
    text-align: center;

    margin-bottom: 100px;

    h2 {
      font-size: 3.5rem;
      text-transform: uppercase;
      margin-bottom: 48px;
      color: ${props => props.theme.colors.blue};
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(334px, 1fr));
    row-gap: 30px;
  }
`;