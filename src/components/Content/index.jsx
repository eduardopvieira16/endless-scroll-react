import { Container, FlexContainer } from "./styles";

export function Content({ children }) {
  return (
    <Container>
      <FlexContainer>{children}</FlexContainer>
    </Container>
  );
}
