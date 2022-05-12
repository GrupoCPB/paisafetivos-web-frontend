import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Donate } from "components/Donate/donate";
import { OurTeam } from 'components/Teams'

//Styled Components
import { Container } from "style/reset";


export function Team() {
  return (
    <>
      <Container>
        <HelmetProvider>
          <Helmet title="Pais Afetivos | Nossa Equipe" />
        </HelmetProvider>
        <OurTeam />
      </Container>
      <Donate />
    </>
  );
}
