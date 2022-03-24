import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "../style/reset";

import { PartnersPage } from '../components/Partners'


export function Partners() {
  return (
    <Container>
      <Helmet title="Pais Afetivos | Parceiros" />
      <PartnersPage />
    </Container>
  );
}
