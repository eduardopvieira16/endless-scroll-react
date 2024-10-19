import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  list-style: none;
`;

export { ListContainer, ListItem };
