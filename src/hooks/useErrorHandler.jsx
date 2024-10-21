import { useErrorHandlerContext } from "../context/errorHandlerContext";

export const useErrorHandler = () => {
  const showError = useErrorHandlerContext();
  return showError;
};
