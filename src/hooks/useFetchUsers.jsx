import { useEffect, useState } from "react";
import { useLayoutContext } from "../context/LayoutContext";
import { axiosSetting } from "../services/api/axiosSetting";

export function useFetchUsers(page) {
  const { setUsers, setHasMoreUsers } = useLayoutContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axiosSetting.get(`?page=${page}&results=20`);
        const newUsers = response.data.results;
        setUsers((prev) => [...prev, ...newUsers]);

        if (newUsers.length === 0) {
          setHasMoreUsers(false);
        }
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      } finally {
        setLoading(false);
      }
    };

    if (page > 0) {
      fetchUsers();
    }
  }, [page, setUsers, setHasMoreUsers]);

  return { loading };
}
