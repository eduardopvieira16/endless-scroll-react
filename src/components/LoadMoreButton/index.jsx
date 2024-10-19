import { LoadMoreContainer } from "./styles";

export function LoadMoreButton({ onClick }) {
  return (
    <LoadMoreContainer>
      <button onClick={onClick}>Carregar mais usuários</button>
    </LoadMoreContainer>
  );
}
