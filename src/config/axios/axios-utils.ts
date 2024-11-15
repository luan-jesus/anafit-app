/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCode } from "axios";

function getMessageFromHttpStatus(status: number | undefined): string {
  const httpMessage:any = {};

  httpMessage[HttpStatusCode.BadRequest] = "Falha ao executar a requisição.";
  httpMessage[HttpStatusCode.Unauthorized] = "Acesso não autorizado.";
  httpMessage[HttpStatusCode.NotFound] = "Recurso não encontrado";

  return httpMessage[status || 0];
}

export default getMessageFromHttpStatus;
