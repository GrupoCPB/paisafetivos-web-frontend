import logoGlobal from 'assets/globalorg-logo.png';
import paisamigoslogo from 'assets/paisamigos_logo1.png'
import logoCPB from "assets/cpb-logo.png";
import logoLGBT from "assets/lgbt-logo.png";
import forumempresas from "assets/forum-logo.png";
import probono from "assets/probono-logo.png";
import atados from "assets/atados-logo.png";
import eternamente from "assets/eternamente-logo.png";

import { ActualPartners } from 'style/actualPartners';
import { Button, Stack, TextField, Typography } from '@mui/material'


export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners">
        <Typography variant="h2">Seja um parceiro da ONG Pais Afetivos</Typography>
      </div>
      <Stack direction="row" spacing={2}>
        <div>
          <Typography variant="subtitle1">Por que apoiar?</Typography>
          <Typography variant="body1">
            Ao fazer parte do grupo de empresas parceiras, sua<br/>empresa se mostra comprometida
            em respeitar e<br/> promover os direitos LGBTQI+.
          </Typography>
          <Typography variant="body1">
            A atitude de mostrar apoio às ONGs que apoiam<br/> minorias
            é boa para a causa, negócios e sociedade em <br/>geral: além de mostrar 
            uma empresa inclusiva e<br/> democrática, você pode atrair talentos, bons negócios,<br />
            descobrir novos parceiros e fortalecer práticas internas<br/> de engajamento
            com os demais colaboradores.
          </Typography>
          <Typography variant="body1">
            Caso queira se tornar um parceiro, basta informar seus<br/> dados para
            contato no formulário ao lado e entraremos em contato.
          </Typography>
        </div>
        <div className="partners-form">
          <p>Informações para contato</p>
          <form target="_blank" action="https://formsubmit.co/cristoshiwassaki@gmail.com" method="POST">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Empresa Parceira" />
            <input type="hidden" name="_autoresponse" value="Agradecemos pelo seu interesse! Em breve entraremos em contato!" />
            <div>
              <TextField variant="filled" type="text" name="Nome" placeholder="Nome" />
            </div>
            <div>
              <TextField variant="filled" type="text" name="Telefone" placeholder="Fone" />
            </div>
            <div>
              <TextField variant="filled" type="email" name="Email" placeholder="E-mail" />
            </div>
            <div>
              <TextField multiline name="Mensagem" placeholder="Escreva uma mensagem (opcional)" rows="10"></TextField>
            </div>
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </Stack>
        <div className="partners-area">
          <div className="partners-area-title">
            <h2>Nossos Parceiros</h2>
          </div>
          <div className="partners-area-text">
            <p>
              Nossa atuação é facilitada com o apoio de nossos parceiros corporativos,<br/>
              que nos dão suporte em nossos programas e nos capacitam a 
              servir<br/> a população LGBTQ+.
            </p>
          </div>
          <div className="partners-area-images">
              <img src={logoGlobal} alt="logo global"/>
              <img src={logoCPB} alt="logo-CPB" />
              <img src={logoLGBT} alt="logo-LGBT"/>
              <img src={paisamigoslogo} alt="logo pais amigos" />
              <img src={forumempresas} alt="logo-forum-empresas"/>
              <img src={probono} alt="logo-probono" />
              <img src={atados} alt="logo-atados"/>
              <img src={eternamente} alt="logo-eternamente"/>
          </div>
        </div>
      </ActualPartners>
      </>
  )
}