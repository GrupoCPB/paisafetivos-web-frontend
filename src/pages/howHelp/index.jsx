import { Helmet, HelmetProvider } from 'react-helmet-async';

//styled components
import { Donate } from 'components/Donate'
import { HowHelpComponent } from 'components/HowHelp';


export function HowHelp() {
  return (
    <>
        <HelmetProvider>
          <Helmet title="Pais Afetivos | Como Ajudar" />
        </HelmetProvider>
        <HowHelpComponent />
        <Donate />
    </>
  )
}