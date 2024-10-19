import React, { createContext, useState } from "react";

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(0);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const handleFilter = () => {
    setPage(1);
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
