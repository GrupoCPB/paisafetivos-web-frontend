import { Helmet, HelmetProvider } from "react-helmet-async";

import { PartnersLogo } from "components/Partners/PartnersLogo";
import { PartnerSuport } from "components/Partners/PartnersSuport";
import { WhyHelp } from "components/Partners/PartnersWhyHelp";

import { Donate } from "components/Donate";

export function Partners() {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Pais Afetivos | Parceiros" />
      </HelmetProvider>

      <WhyHelp />
      <PartnerSuport />
      <PartnersLogo />
      <Donate />
    </>
  );
}
