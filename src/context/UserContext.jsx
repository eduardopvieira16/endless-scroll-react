import React, { createContext, useState, useCallback } from "react";
import { axiosSetting } from "../services/api/axiosSetting";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const fetchUsers = useCallback(async (page) => {
    setLoading(true);
    try {
      const response = await axiosSetting.get(`?results=16&page=${page}`);
      const fetchedUsers = response.data.results.map((user, index) => ({
        id: `${page}-${index + 1}`,
        name: `${user.name.first} ${user.name.last}`,
        picture: user.picture.thumbnail,
        email: user.email,
        country: user.location.country,
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
  }, []);

  return (
    <UserContext.Provider
      value={{ users, loading, error, hasMoreUsers, fetchUsers }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => React.useContext(UserContext);
