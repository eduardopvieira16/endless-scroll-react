import { createContext, useContext, useState } from "react";
import ErrorModal from "../components/ErrorModal";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = (message) => {
    setError(message);
  };

  const closeError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={showError}>
      {children}
      {error && <ErrorModal message={error} onClose={closeError} />}
    </ErrorContext.Provider>
  );
};

export const useErrorHandler = () => {
  return useContext(ErrorContext);
};
