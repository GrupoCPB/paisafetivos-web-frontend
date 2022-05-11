import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

//styled components
import { Container } from 'style/reset';
import { Donate } from 'components/Donate'
import { HowHelpComponent } from 'components/HowHelp';


export function HowHelp() {
  return (
    <>
      <Container>
        <HelmetProvider>
          <Helmet title="Pais Afetivos | Como Ajudar" />
        </HelmetProvider>
        <HowHelpComponent />
        <Donate />
      </Container>
    </>
  )
}