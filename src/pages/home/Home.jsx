import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { SectionHowWorks, SectionDonation, SectionHelpToo } from "components";
import { SectionParners, SectionAbout, SectionJourneysAndGoals } from "components";
import { Container } from "style/reset";

export function Home() {
  return (
    <>
      <Container>
        <HelmetProvider>
          <Helmet title="Pais Afetivos | Home" />
        </HelmetProvider>
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
