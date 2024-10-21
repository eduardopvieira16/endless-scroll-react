import { ModalContent } from "./styles";
import { ModalOverlay } from "./styles";

const ErrorModal = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Erro</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ErrorModal;
