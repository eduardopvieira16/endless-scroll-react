import { StyledInput } from "./styles";

export function Input({ type, placeholder, onChange }) {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} />
  );
}
