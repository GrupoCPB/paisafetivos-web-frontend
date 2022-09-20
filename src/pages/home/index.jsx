import { Helmet, HelmetProvider } from "react-helmet-async";

import { SectionHowWorks, 
    SectionDonation, 
    SectionHelpToo,
    SectionParners,
    SectionAbout,
    SectionJourneysAndGoals
  } from "components";



export function Home() {
  return (
    <>
        <HelmetProvider>
          <Helmet title="Pais Afetivos | Home" />
        </HelmetProvider>
        <SectionDonation />
        <SectionHelpToo />
        <SectionAbout />
        <SectionJourneysAndGoals />
        <SectionHowWorks />
        <SectionParners />
    </>
  );
}
