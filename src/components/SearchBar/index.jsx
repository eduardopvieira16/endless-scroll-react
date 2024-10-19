import Input from "../Input";
import { SearchContainer } from "./styles";

const SearchBar = ({ placeholder, onChange }) => {
  return (
    <SearchContainer>
      <Input type="text" placeholder={placeholder} onChange={onChange} />
    </SearchContainer>
  );
};

export default SearchBar;
