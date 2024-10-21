import { useErrorHandler } from "../../context/errorHandlerContext";
import { axiosSetting } from "./axiosConfig";

const ErrorInterceptor = () => {
  const showError = useErrorHandler();

  axiosSetting.interceptors.response.use(
    (response) => response,
    (error) => {
      let errorMessage = "";

      if (error.response) {
        switch (error.response.status) {
          case 400:
            errorMessage =
              "Requisição inválida. Verifique os parâmetros enviados.";
            break;
          case 401:
            errorMessage = "Não autorizado. Verifique suas credenciais.";
            break;
          case 403:
            errorMessage =
              "Proibido. Você não tem permissão para acessar este recurso.";
            break;
          case 404:
            errorMessage = "Recurso não encontrado. Verifique a URL.";
            break;
          case 500:
            errorMessage =
              "Erro interno do servidor. Tente novamente mais tarde.";
            break;
          case 408:
            errorMessage = "Tempo de resposta excedido. Tente novamente.";
            break;
          case 429:
            errorMessage =
              "Limite de requisições atingido. Tente novamente mais tarde.";
            break;
          default:
            errorMessage = `Erro inesperado: ${error.response.status} - ${error.response.statusText}`;
        }
      } else if (error.request) {
        errorMessage =
          "Sem resposta do servidor. Verifique sua conexão de internet.";
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
