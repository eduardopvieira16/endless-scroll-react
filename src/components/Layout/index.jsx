import { useState } from "react";
import { Header } from "../Header";
import { Content } from "../Content";
import { FilterButton } from "../FilterButton";
import { SearchBar } from "../SearchBar";
import { UserList } from "../UserList";
import { LoadMoreButton } from "../LoadMoreButton";
import { Grid } from "./styles";

export function Layout() {
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(0);
  const [loadUsers, setLoadUsers] = useState(false);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const handleFilter = () => {
    setLoadUsers(true);
    setPage(1);
  };

  const loadMoreUsers = async () => {
    if (hasMoreUsers) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Grid>
      <Header />
      <Content>
        <>
          <SearchBar
            placeholder="Buscar por nome ou e-mail"
            onChange={(e) => setFilterText(e.target.value)}
          />
          <FilterButton onClick={handleFilter}>Buscar</FilterButton>
        </>
        <>
          <UserList
            page={page}
            filterText={filterText}
            setHasMoreUsers={setHasMoreUsers}
          />
          <LoadMoreButton onClick={loadMoreUsers} />
        </>
      </Content>
    </Grid>
  );
}
