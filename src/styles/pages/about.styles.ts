import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black10};
  color: ${props => props.theme.colors.blue};
`;

export const TeamMembersContainer = styled.section`
  max-width: 1120px;
  padding: 100px 20px 85px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  header {
    text-align: center;

    margin-bottom: 100px;

    h2 {
      font-weight: 400;
      font-size: 56px;
      text-transform: uppercase;
      margin-bottom: 24px;
      color: ${props => props.theme.colors.blueDark};
    }

    p {
      font-size: 18px;
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(334px, 1fr));
    row-gap: 30px;
  }
`;