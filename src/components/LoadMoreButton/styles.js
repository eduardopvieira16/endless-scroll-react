import styled from "styled-components";

const LoadMoreContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  background-color: transparent;

  button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: darkred;
    }

    @media (max-width: 768px) {
      padding: 8px 16px;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      padding: 6px 12px;
      font-size: 12px;
      width: 100%;
    }
  }
`;

export { LoadMoreContainer };
