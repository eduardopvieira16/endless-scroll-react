import { createContext, useContext, useState } from "react";
import ErrorModal from "../components/ErrorModal";

const ErrorHandlerContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const showError = (message) => {
    setErrorMessage(message);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setErrorMessage("");
  };

  return (
    <ErrorHandlerContext.Provider value={showError}>
      {children}
      {isModalOpen && (
        <ErrorModal message={errorMessage} onClose={closeModal} />
      )}
    </ErrorHandlerContext.Provider>
  );
};

export const useErrorHandlerContext = () => {
  return useContext(ErrorHandlerContext);
};
