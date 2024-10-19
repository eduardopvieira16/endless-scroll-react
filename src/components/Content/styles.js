import styled from "styled-components";

const Container = styled.div`
  grid-area: CT;
  color: #333;
  background-color: #f4f4f4;
  padding: 20px;
  height: calc(100vh - 70px);
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: blue;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    height: calc(100vh - 50px);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    padding: 0 5px;
  }
`;

export { Container, FlexContainer };
