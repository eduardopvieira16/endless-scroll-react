import { useState, useEffect, useCallback } from "react";
import { ListContainer, ListItem } from "./styles";
import { axiosSetting } from "../../services/api/axiosSetting";
import { Card } from "../Card";

export function UserList({ page, filterText, setHasMoreUsers, setPage }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosSetting.get(`?results=20&page=${page}`);
      const fetchedUsers = response.data.results.map((user, index) => ({
        id: `${page}-${index + 1}`,
        name: `${user.name.first} ${user.name.last}`,
        picture: user.picture.thumbnail,
        email: user.email,
        country: user.location.country,
      }));

      setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);

      if (response.data.results.length < 20) {
        setHasMore(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;
      if (bottomReached && !loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, setPage]);

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
      {loading && <p>Carregando...</p>}
    </ListContainer>
  );
}
