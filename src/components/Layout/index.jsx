import { Header } from "../Header";
import { Content } from "../Content";
import { FilterButton } from "../FilterButton";
import { SearchBar } from "../SearchBar";
import { UserList } from "../UserList";
import { Grid } from "./styles";
import { LoadMoreButton } from "../LoadMoreButton";
import { useLayoutContext } from "../../context/LayoutContext";

export function Layout() {
  const { filterText, setFilterText, handleFilter, loadMoreUsers } =
    useLayoutContext();

  return (
    <Grid>
      <Header />
      <Content>
        <SearchBar
          placeholder="Buscar por nome ou e-mail"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <FilterButton onClick={handleFilter}>Buscar</FilterButton>
        <UserList />
        <LoadMoreButton onClick={loadMoreUsers} />
      </Content>
    </Grid>
  );
}
