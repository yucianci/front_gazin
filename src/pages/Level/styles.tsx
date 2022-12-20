import styled from 'styled-components';

export const Search = styled.div`
  width: 100%;
  padding: 120px 35% 0;
  @media (max-width: 1300px) {
    padding: 120px 30% 0;
  }
  @media (max-width: 800px) {
    padding: 120px 48px 0;
  }
`;

export const ActionButton = styled.div`
  display: flex;
  justify-content: space-around;
`;
