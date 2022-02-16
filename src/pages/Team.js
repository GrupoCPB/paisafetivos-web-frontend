import React from "react";
import { Helmet } from 'react-helmet';
import { Donate } from "../components/Donate/donate";

//Styled Components
import { Container } from "../style/reset";
import { OurTeam } from '../components/Teams'

//Images

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
