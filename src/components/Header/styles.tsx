import styled from 'styled-components';

export const Main = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-bottom: 1px solid #383838;
  backdrop-filter: blur(6px);
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  a {
    font-size: 1.7rem;
    font-weight: 600;

    :visited {
      color: #dbdbdb;
    }
  }

  div a {
    font-size: 1.1rem;
    font-weight: 300;
    transition: all 0.3s;
    opacity: 0.4;

    :visited {
      color: #dbdbdb;
    }

    :last-child {
      margin: 0 32px;
    }

    :hover {
      opacity: 1;
    }
  }
`;
