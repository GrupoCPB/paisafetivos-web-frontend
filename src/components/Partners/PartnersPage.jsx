import { Typography } from '@mui/material'

import { PartnersLogo } from './PartnersLogo/partnersLogo'

import { ActualPartners } from 'style/actualPartners';

import { Form } from 'components';
import { Donate } from 'components/Donate';

// import fundo from 'assets/frame_29.png';

export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners">
      </div>
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

        <div className="partners-form">
          <Typography variant="body1">Informações para contato </Typography>
            <Form 
              subject="Empresa Parceira"
              variant="filled"
              label=""
              type="text"
              name="Nome"
              placeholder="Nome"
              name2="fone"
              label2=""
              placeholder2="Fone"
              type3="email"
              label3=''
              name3="E-mail"
              placeholder3="E-mail"
              placeholderMultiline="Escreva uma mensagem (opcional)" 
            />
          {/* <img src={fundo} alt="" /> */}
        </div>

      </div>
        <div className="partners-area">
          <div className="partners-area-title">
            <Typography variant="h2">Nossos Parceiros</Typography>
          </div>
          <div className="partners-area-text">
            <Typography variant="body1">
              Nossa atuação é facilitada com o apoio de nossos parceiros corporativos, que nos dão <br/>
              suporte em nossos programas e nos capacitam a servir a população LGBTQ+.
            </Typography>
          </div>
          <div className="partners-area-images">
            <PartnersLogo />
          </div>
        </div>
      </ActualPartners>
      <Donate />
      </>
  )
}