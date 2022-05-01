import React from "react";
import { Helmet } from "react-helmet";

import { SectionHowWorks, SectionDonation, SectionHelpToo } from "components";
import { SectionParners, SectionAbout, SectionJourneysAndGoals } from "components";
import { Container } from "style/reset";

export function Home() {
  return (
    <>
      <Container>
        <Helmet title="Pais Afetivos | Home" />
        <SectionDonation />
        <SectionHelpToo />
        <SectionAbout />
        <SectionJourneysAndGoals />
        <SectionHowWorks />
        <SectionParners />
      </Container>
    </>
  );
}
