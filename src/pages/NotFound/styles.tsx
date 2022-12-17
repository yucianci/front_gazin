import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 140px 48px 0;
  @media (max-width: 900px) {
    padding: 140px 24px 0;
  }
  h3 {
    font-weight: normal;
    opacity: 0.5;
  }
`;
