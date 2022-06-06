
import { PartnersLogo } from './PartnersLogo'
import { PartnersForm } from './PartnersForm'
import { PartnerSuport } from './PartnersSuport';
import { WhyHelp } from './PartnersWhyHelp'

import { Donate } from 'components/Donate';

// import fundo from 'assets/frame_29.png';

export function PartnersPage(){
  return(
    <>
    
      
        <WhyHelp />

        <PartnersForm />

     
        
          <PartnerSuport />
          <PartnersLogo />
          

      
      <Donate />
      </>
  )
}