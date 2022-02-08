import React from "react";
import { Helmet } from "react-helmet";

import SectionWorks from "../components/Home/SectionWorks";
import SectionDonation from "../components/Home/SectionDonation";
import About from "./About";
import SectionNeedHelp from "../components/Home/SectionNeedHelp";
import SctionParners from "../components/Home/SectionPartners";
import { Container } from "../style/reset";

export function Home() {
  return (
    <Container>
      <Helmet title="Pais Afetivos | Home" />
      <SectionDonation />
      <About />
      <SectionNeedHelp />
      <SectionWorks></SectionWorks>
      <SctionParners />
    </Container>
  );
}
