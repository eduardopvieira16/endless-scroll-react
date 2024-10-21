import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { axiosSetting } from "../services/api/axiosSetting";
import { useErrorContext } from "../context/ErrorContext";

export function useFetchUsers(page) {
  const { setUsers, setHasMore } = useUserContext();
  const { showError } = useErrorContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axiosSetting.get(`?page=${page}&results=20`);
        const fetchedUsers = response.data.results.map((user) => ({
          id: user.login.uuid || `${user.name.first}-${user.name.last}-${page}`,
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.thumbnail,
          email: user.email,
          country: user.location.country,
        }));

        setUsers((prev) => [...prev, ...fetchedUsers]);

        if (fetchedUsers.length < 20) {
          setHasMore(false);
        }
      } catch (error) {
        showError("Erro ao carregar usuários.");
        console.error("Erro ao carregar usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    if (page > 0) {
      fetchUsers();
    }
  }, [page, setUsers, setHasMore, showError]);

  return { loading };
}
