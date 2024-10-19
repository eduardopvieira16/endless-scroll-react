import { useState } from "react";
import {
  UserListContainer,
  UserListItem,
  UserName,
  UserPicture,
} from "./styles";

const staticUsers = [
  {
    id: 1,
    name: "João Silva",
    picture: "https://via.placeholder.com/100",
    email: "joao@example.com",
    country: "Brasil",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    picture: "https://via.placeholder.com/50",
    email: "maria@example.com",
    country: "Brasil",
  },
  {
    id: 3,
    name: "Carlos Souza",
    picture: "https://via.placeholder.com/50",
    email: "carlos@example.com",
    country: "Brasil",
  },
];

export function UserList() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserListContainer>
      <ul>
        {staticUsers.map((user) => (
          <UserListItem
            key={user.id}
            onClick={() => {
              console.log("Usuário selecionado:", user);
              setSelectedUser(user);
            }}
          >
            <UserPicture src={user.picture} alt={user.name} />
            <UserName>{user.name}</UserName>
          </UserListItem>
        ))}
      </ul>
    </UserListContainer>
  );
}
