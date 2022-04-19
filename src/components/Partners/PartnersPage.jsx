import logoGlobal from 'assets/global_logo.png';
import paisamigoslogo from 'assets/paisamigos_logo1.png'
import logoCPB from "assets/cpb-logo.png";
import logoLGBT from "assets/lgbt-logo.png";
import forumempresas from "assets/forum-logo.png";
import probono from "assets/probono-logo.png";
import atados from "assets/atados-logo.png";
import eternamente from "assets/eternamente-logo.png";

import { ActualPartners } from 'style/actualPartners';
import { Grid, Typography } from '@mui/material'
import { Form } from 'components';
import { Donate } from './components';


export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners">
        <Typography variant="h2">Seja um parceiro da ONG Pais Afetivos</Typography>
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
          <Form />
        </div>

      </div>
        <div className="partners-area">
          <div className="partners-area-title">
            <Typography variant="h2">Nossos Parceiros</Typography>
          </div>
          <div className="partners-area-text">
            <Typography variant="body1">
              Nossa atuação é facilitada com o apoio de nossos parceiros corporativos,<br/>
              que nos dão suporte em nossos programas e nos capacitam a 
              servir<br/> a população LGBTQ+.
            </Typography>
          </div>
          <div className="partners-area-images">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm:2, md:3 }}>
                <Grid item xs={3}>
                  <img src={logoGlobal} alt="logo global"/>
                </Grid>
                <Grid item xs={3}>
                  <img src={logoCPB} alt="logo-CPB" />
                </Grid>
                <Grid item xs={3}>
                  <img src={logoLGBT} alt="logo-LGBT"/>
                </Grid>
                <Grid item xs={3}>
                  <img src={paisamigoslogo} alt="logo pais amigos" />
                </Grid>
                <Grid item xs={3}>
                  <img src={forumempresas} alt="logo-forum-empresas"/> 
                </Grid>
                <Grid item xs={3}>
                  <img src={probono} alt="logo-probono" />  
                </Grid>
                <Grid item xs={3}>
                  <img src={atados} alt="logo-atados"/> 
                </Grid>
                <Grid item xs={3}>
                  <img src={eternamente} alt="logo-eternamente"/> 
                </Grid>
            </Grid>
          </div>
        </div>
        <Donate />
      </ActualPartners>
      </>
  )
}