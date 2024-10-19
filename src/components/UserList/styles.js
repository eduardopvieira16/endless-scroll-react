import styled from "styled-components";

const UserListContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const UserListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  list-style: none;
`;

const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export { UserListContainer, UserListItem, UserPicture, UserName };
