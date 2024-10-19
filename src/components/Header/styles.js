import styled from "styled-components";

const Container = styled.header`
  background-color: #34495e;
  color: #ffffff;
  grid-area: HD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

export { Container };
