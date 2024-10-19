import { StyledButton } from "./styles";

const FilterButton = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default FilterButton;
