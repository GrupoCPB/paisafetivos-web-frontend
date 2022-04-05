import React from 'react';
import { Helmet } from 'react-helmet';

//styled components
import { Container } from 'style/reset';
import { HowHelpComponent } from 'components/HowHelp';


export function HowHelp() {
  return (
    <>
      <Container>
        <Helmet title="Pais Afetivos | Como Ajudar" />
        <HowHelpComponent />
      </Container>
    </>
  )
}