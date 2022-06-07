
import { PartnersLogo } from './PartnersLogo'

import { PartnerSuport } from './PartnersSuport';
import { WhyHelp } from './PartnersWhyHelp'

import { Donate } from 'components/Donate';

// import fundo from 'assets/frame_29.png';

export function PartnersPage(){
  return(
    <>
    
      
        <WhyHelp />


     
        
          <PartnerSuport />
          <PartnersLogo />
          

      
      <Donate />
      </>
  )
}