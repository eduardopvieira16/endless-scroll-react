import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";

export function useFetchUsers(page) {
  const { fetchUsers, hasMoreUsers } = useUserContext();

  useEffect(() => {
    if (page > 0 && hasMoreUsers) {
      fetchUsers(page);
    }
  }, [page, fetchUsers, hasMoreUsers]);
}
