import { Typography } from '@mui/material'

import { PartnersLogo } from './PartnersLogo'
import { PartnersForm } from './PartnersForm'
import { PartnerSuport } from './PartnersSuport';

import { ActualPartners } from 'style/actualPartners';

// import { Form } from 'components';
import { Donate } from 'components/Donate';

// import fundo from 'assets/frame_29.png';

export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners-info">
        <div className="header-partners-text">
          <Typography variant="h2">Seja nosso parceiro!</Typography>
          <Typography variant="body1">
           <strong>É importante para a causa:</strong> Seu suporte fará com que minorias sejam mais incluídas na sociedade.
          </Typography>
          <br/>
          <Typography variant="body1">
            <strong>É bom para os negócios:</strong> você pode atrair talentos, descobrir novos parceiros e fortalecer a relação com os demais colaboradores.
          </Typography>
          <br/>
          <Typography variant="body1">
            Caso queira se tornar um parceiro, basta informar seus dados para contato no formulário ao lado e entraremos em contato.
          </Typography>
        </div>

        <PartnersForm />

      </div>
        
          <PartnerSuport />
          <PartnersLogo />
          

      </ActualPartners>
      <Donate />
      </>
  )
}