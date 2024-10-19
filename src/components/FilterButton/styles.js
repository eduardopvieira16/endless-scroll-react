import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 35px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    padding: 6px 12px;
    font-size: 12px;
    width: 100%;
  }
`;

export { StyledButton };
