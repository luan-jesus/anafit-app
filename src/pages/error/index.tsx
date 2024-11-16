/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { useRouteError } from "react-router-dom";
import { Container } from "./styles";

const Error: React.FC = () => {
  const error:any = useRouteError();
  console.error(error);

  return (
    <Container>
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado aconteceu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Container>
  )
}

export default Error
