import { StyledInput } from "./styles";

const Input = ({ type, placeholder, onChange }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} />
  );
};

export default Input;
