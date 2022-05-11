import { WhoWeAre } from 'components/WhoWeAre';
import { Container } from 'style/reset';
import { Helmet, HelmetProvider } from 'react-helmet-async'

export function About() {
  return (
    <Container>
      <HelmetProvider>
        <Helmet title="Pais Afetivos | Quem somos" />
      </HelmetProvider>
      <WhoWeAre />
    </Container>
  )
}