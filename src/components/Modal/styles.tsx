import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #242424;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #383838;
  margin: 0 20px;
  text-transform: capitalize;
  h1 {
    font-weight: 500;
    font-size: 1.7rem;
    @media (max-width: 600px) {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
  @media (max-width: 600px) {
    font-weight: 500;
    font-size: 1.2rem;
  }
`;
