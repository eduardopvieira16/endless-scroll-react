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
  }
`;

export { LoadMoreContainer };
