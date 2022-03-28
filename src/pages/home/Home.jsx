import React from "react";
import { Helmet } from "react-helmet";

import { SectionWorks, SectionDonation, SectionNeedHelp } from "components";
import { SectionParners, SectionAbout } from "components";
import { Container } from "style/reset";

export function Home() {
  return (
    <>
      <Container>
        <Helmet title="Pais Afetivos | Home" />
        <SectionDonation />
        <SectionAbout />
        <SectionNeedHelp />
        <SectionWorks />
        <SectionParners />
      </Container>
    </>
  );
}
