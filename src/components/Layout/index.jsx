import { useState } from "react";
import { Header } from "../Header";
import { Content } from "../Content";
import { FilterButton } from "../FilterButton";
import { SearchBar } from "../SearchBar";
import { UserList } from "../UserList";
import { Grid } from "./styles";
import { ErrorProvider } from "../../context/ErrorContext";

export function Layout() {
  const [filterText, setFilterText] = useState("");
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);

  const handleFilter = () => {
    setPage(1);
  };

  return (
    <Grid>
      <ErrorProvider>
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
              setPage={setPage}
            />
          </>
        </Content>
      </ErrorProvider>
    </Grid>
  );
}
