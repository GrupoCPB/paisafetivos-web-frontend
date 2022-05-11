import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "style/reset";

import { PartnersPage } from 'components'


export function Partners() {
  return (
    <Container>
      <HelmetProvider>
        <Helmet title="Pais Afetivos | Parceiros" />
      </HelmetProvider>
      <PartnersPage />
    </Container>
  );
}
