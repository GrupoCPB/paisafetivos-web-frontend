import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Donate } from "components/Donate/donate";
import { OurTeam } from 'components/Teams'

export function Team() {
  return (
    <>
        <HelmetProvider>
          <Helmet title="Pais Afetivos | Nossa Equipe" />
        </HelmetProvider>
        <OurTeam />
      <Donate />
    </>
  );
}
