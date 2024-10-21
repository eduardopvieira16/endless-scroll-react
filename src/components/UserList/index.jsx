import { useEffect, useRef } from "react";
import { useLayoutContext } from "../../context/LayoutContext";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { ListContainer, ListItem } from "./styles";

export function UserList() {
  const { users, page, loadMoreUsers, hasMoreUsers } = useLayoutContext();
  const { loading } = useFetchUsers(page);
  const observerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreUsers && !loading) {
        loadMoreUsers();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadMoreUsers, hasMoreUsers, loading]);

  /*
  <ListContainer>
{users.map((user) => (
  <ListItem key={user.id}>
    <Card user={user} />
  </ListItem>
))}
</ListContainer>
  */

  return (
    <ListContainer>
      {users.map((user, index) => (
        <ListItem key={index}>
          {user.name.first} {user.name.last}
        </ListItem>
      ))}
      <div ref={observerRef} style={{ height: "1px" }} />
      {loading && <p>Carregando...</p>}
      {!hasMoreUsers && <p>Todos os usuários carregados.</p>}
    </ListContainer>
  );
}
