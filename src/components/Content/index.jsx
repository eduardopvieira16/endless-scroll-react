import { Paragraph } from "../../styles/global";
import { Container } from "./styles";

const Content = ({ children }) => {
  return (
    <Container>
      <Paragraph>Teste</Paragraph>
      {children}
    </Container>
  );
};

export default Content;
