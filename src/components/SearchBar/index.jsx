import { Input } from "../Input";
import { SearchContainer } from "./styles";

export function SearchBar({ placeholder }) {
  return (
    <SearchContainer>
      <Input type="text" placeholder={placeholder} />
    </SearchContainer>
  );
}
