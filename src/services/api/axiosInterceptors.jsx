import { useErrorHandler } from "../../context/errorHandlerContext";
import { axiosSetting } from "./axiosConfig";

const ErrorInterceptor = () => {
  const showError = useErrorHandler();

  const errorMessages = {
    400: "Requisição inválida. Verifique os parâmetros enviados.",
    401: "Não autorizado. Verifique suas credenciais.",
    403: "Proibido. Você não tem permissão para acessar este recurso.",
    404: "Recurso não encontrado. Verifique a URL.",
    500: "Erro interno do servidor. Tente novamente mais tarde.",
    408: "Tempo de resposta excedido. Tente novamente.",
    429: "Limite de requisições atingido. Tente novamente mais tarde.",
  };

  axiosSetting.interceptors.response.use(
    (response) => response,
    (error) => {
      let errorMessage = "";

      if (error.response) {
        errorMessage = errorMessages[error.response.status] ||
          `Erro inesperado: ${error.response.status} - ${error.response.statusText}`;
      } else if (error.request) {
        errorMessage = "Sem resposta do servidor. Verifique sua conexão de internet.";
      } else {
        errorMessage = "Erro ao configurar a requisição: " + error.message;
      }

      if (error.code === "ECONNABORTED") {
        errorMessage = "Requisição demorou mais do que o esperado (Timeout).";
      }

      showError(errorMessage);

      return Promise.reject(error);
    }
  );

  return null;
};

export default ErrorInterceptor;
