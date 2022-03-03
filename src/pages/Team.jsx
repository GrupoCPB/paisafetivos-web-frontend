import React from "react";
import { Helmet } from 'react-helmet';
import { Donate } from "components/Donate/donate";
import { OurTeam } from 'components/Teams'

//Styled Components
import { Container } from "style/reset";


export default function Team() {
  return (
    <>
      <Container>
        <Helmet title="Pais Afetivos | Nossa Equipe" />
        <OurTeam />
      </Container>
      <Donate />
    </>
  );
}
