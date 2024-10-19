import { ListContainer, ListItem } from "./styles";
import { useUserContext } from "../../context/UserContext";
import { useFetchUsers } from "../../hooks/useFetchUsers"; // Ajuste a importação do hook
import { Card } from "../Card";

export function UserList({ page }) {
  const { users, loading, error } = useUserContext();

  useFetchUsers(page);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ListContainer>
      {users.map((user) => (
        <ListItem key={user.id}>
          <Card user={user} />
        </ListItem>
      ))}
    </ListContainer>
  );
}
