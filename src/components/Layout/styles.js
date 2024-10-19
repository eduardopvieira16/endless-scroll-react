import styled from "styled-components";

const Grid = styled.main`
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 100%;
  grid-template-areas:
    "HD"
    "CT";
  height: 100vh;
  min-width: 315px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-rows: 60px auto;
  }

  @media (max-width: 480px) {
    grid-template-rows: 50px auto;
    height: auto;
  }
`;

export { Grid };
