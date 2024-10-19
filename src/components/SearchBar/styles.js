import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px 0;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export { SearchContainer };
