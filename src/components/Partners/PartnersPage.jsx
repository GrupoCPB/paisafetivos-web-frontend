import { Typography } from '@mui/material'

import { PartnersLogo } from './PartnersLogo/partnersLogo'

import { ActualPartners } from 'style/actualPartners';

import { Form } from 'components';
import { Donate } from 'components/Donate';


export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners">
        <Typography variant="h2">Seja um parceiro da <br /> ONG Pais Afetivos</Typography>
      </div>
      <div className="header-partners-info">
        <div className="header-partners-text">
          <Typography variant="subtitle1">Por que apoiar?</Typography>
          <Typography variant="body1">
            Ao fazer parte do grupo de empresas parceiras, sua<br/>empresa se mostra comprometida
            em respeitar e<br/> promover os direitos LGBTQI+.
          </Typography>
          <br/>
          <Typography variant="body1">
            A atitude de mostrar apoio às ONGs que apoiam<br/> minorias
            é boa para a causa, negócios e sociedade em <br/>geral: além de mostrar 
            uma empresa inclusiva e<br/> democrática, você pode atrair talentos, bons negócios,<br />
            descobrir novos parceiros e fortalecer práticas internas<br/> de engajamento
            com os demais colaboradores.
          </Typography>
          <br/>
          <Typography variant="body1">
            Caso queira se tornar um parceiro, basta informar seus<br/> dados para
            contato no formulário ao lado e entraremos em contato.
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