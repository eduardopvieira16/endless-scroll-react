import React, { createContext, useState } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const handleFilter = () => {
    setPage(1);
    setUsers([]);
  };

  const loadMoreUsers = () => {
    if (hasMoreUsers) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        filterText,
        setFilterText,
        page,
        setPage,
        users,
        setUsers,
        hasMoreUsers,
        setHasMoreUsers,
        handleFilter,
        loadMoreUsers,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayoutContext = () => React.useContext(LayoutContext);
