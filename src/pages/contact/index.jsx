import { Helmet, HelmetProvider } from "react-helmet-async"
import { ContactPage, Donate } from 'components'


export function Contact(){
  return(
    <>
      <HelmetProvider>
        <Helmet title="Pais Afetivos | Contato" />
      </HelmetProvider>
        <ContactPage /> 
        <Donate />
    </>


  )
}