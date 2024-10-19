import { Input } from "../Input";
import { SearchContainer } from "./styles";

export function SearchBar({ placeholder, onChange }) {
  return (
    <SearchContainer>
      <Input type="text" placeholder={placeholder} onChange={onChange} />
    </SearchContainer>
  );
}
