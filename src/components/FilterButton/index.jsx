import { StyledButton } from "./styles";

export function FilterButton({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
