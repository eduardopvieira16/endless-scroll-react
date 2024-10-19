import { useState } from "react";
import { Header } from "../Header";
import { Grid } from "./styles";
import { Content } from "../Content";
import { FilterButton } from "../FilterButton";
import { SearchBar } from "../SearchBar";
import { UserList } from "../UserList";

export function Layout() {
  const [filterText, setFilterText] = useState("");

  const handleFilter = () => {
    console.log("Filtering with:", filterText);
  };

  return (
    <Grid>
      <Header />
      <Content>
          <SearchBar
            placeholder="Buscar por nome ou e-mail"
            onChange={(e) => setFilterText(e.target.value)}
          />
          <FilterButton onClick={handleFilter}>Buscar</FilterButton>
      <UserList/>
      </Content>
    </Grid>
  );
}
