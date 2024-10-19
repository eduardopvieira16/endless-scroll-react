import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  height: 250px;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    margin: 5px;
  }
`;

export { CardContainer };
