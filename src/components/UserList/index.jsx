import { useEffect } from "react";
import { ListContainer, ListItem } from "./styles";
import { Card } from "../Card";
import { useUserContext } from "../../context/UserContext";
import { useFetchUsers } from "../../hooks/useFetchUsers";

export function UserList({ page, setHasMoreUsers, setPage }) {
  const { users, loading, hasMore } = useUserContext();
  const { loading: fetchLoading } = useFetchUsers(page);

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

  return (
    <ListContainer>
      {users.map((user) => (
        <ListItem key={user.id}>
          <Card user={user} />
        </ListItem>
      ))}
      {(loading || fetchLoading) && <p>Carregando...</p>}
    </ListContainer>
  );
}
