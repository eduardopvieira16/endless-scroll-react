import { Container, FlexContainer } from "./styles";
import { Paragraph } from "../../styles/global";
import { useState } from "react";
import SearchBar from "../SearchBar";
import FilterButton from "../FilterButton";

const Content = () => {
  const [filterText, setFilterText] = useState("");

  const handleFilter = () => {
    console.log("Filtering with:", filterText);
  };

  return (
    <Container>
      <FlexContainer>
        <SearchBar
          placeholder="Filter"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <FilterButton onClick={handleFilter}>
          Filter
        </FilterButton>
      </FlexContainer>
    </Container>
  );
};

export default Content;
