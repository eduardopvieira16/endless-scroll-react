import { useState, useEffect, useCallback } from "react";

import { ListContainer, ListItem } from "./styles";

import { axiosSetting } from "../../services/api/axiosSetting";
import { Card } from "../Card";

export function UserList({ page, filterText, setHasMoreUsers }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosSetting.get(`?results=10&page=${page}`);
      const fetchedUsers = response.data.results.map((user, index) => ({
        id: `${page}-${index + 1}`,
        name: `${user.name.first} ${user.name.last}`,
        picture: user.picture.thumbnail,
        email: user.email,
      }));

      setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);

      if (response.data.results.length < 10) {
        setHasMoreUsers(false);
      }
    } catch (err) {
      setError("Erro ao carregar os usuários.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, setHasMoreUsers]);

  useEffect(() => {
    if (page > 0) {
      fetchUsers();
    }
  }, [page, fetchUsers]);

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
