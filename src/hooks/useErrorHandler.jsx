import { useErrorContext } from './ErrorContext';

export const useErrorHandler = () => {
  const showError = useErrorContext();
  return showError;
};
