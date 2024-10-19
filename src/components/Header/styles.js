import styled from 'styled-components';

export const Container = styled.header`
  background-color: #34495e;
  color: #ffffff;

  grid-area: HD;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;

  @media screen and (max-width: 1280px) {
    padding: 16px 32px;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;
