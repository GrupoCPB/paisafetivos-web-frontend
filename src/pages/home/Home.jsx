import React from "react";
import { Helmet } from "react-helmet";

import { SectionWorks, SectionDonation, SectionNeedHelp, SectionHelpToo } from "components";
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
        <SectionNeedHelp />
        <SectionWorks />
        <SectionParners />
      </Container>
    </>
  );
}
