import styled from "styled-components";

/**
 * Layout
 * HD = Header
 * CT = Content
 */

export const Grid = styled.main`
  display: grid;
  grid-template-rows: 80px auto;
  grid-template-columns: 100%;

  grid-template-areas:
    "HD"
    "CT";

  height: 100vh;
  min-width: 315px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
