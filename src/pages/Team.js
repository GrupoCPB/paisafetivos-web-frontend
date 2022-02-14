import React from "react";
import { Helmet } from 'react-helmet';
import { Donate } from "../components/Donate/donate";

//Styled Components
import { Container } from "../style/reset";

//Images

export default function Team() {
  return (
    <>
      <Container>
        <Helmet title="Pais Afetivos | Nossa Equipe" />
        <h1>Team Page under construction...</h1>
      </Container>
      <Donate />
    </>
  );
}
