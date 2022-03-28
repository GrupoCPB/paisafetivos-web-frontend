import { ActualPartners } from 'style/actualPartners'
import logoCPB from "assets/cpb-logo.png";
import logoLGBT from "assets/lgbt-logo.png";
import forumempresas from "assets/forum-logo.png";
import probono from "assets/probono-logo.png";
import atados from "assets/atados-logo.png";
import eternamente from "assets/eternamente-logo.png";

import { Typography } from '@mui/material'




export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners">
        <Typography variant="h2">Seja um parceiro da<br/> ONG Pais Afetivos</Typography>
      </div>
      <div>
        <div>
          <Typography variant="subtitle1">Por que apoiar?</Typography>
          <Typography variant="body1">
            Ao fazer parte do grupo de empresas parceiras, sua empresa se mostra compometida
            em respeitar e promover os direitos LGBTQI+.
          </Typography>
          <Typography variant="body1">
            A atitude de mostrar apoio às ONGs que apoiam minorias
            é boa para a causa, negócios e sociedade em geral. Além de mostrar 
            uma epmresa inclusiva e democrática, você pode atrair talentos, bons negócios,
            descobrir novos parceiros e fortalecer práticas internas de engajamento
            com os demais colaboradores.
          </Typography>
          <Typography variant="body1">
            Caso queira se tornar um parceiro, basta informar seus dados para
            contato no formulário ao lado e entraremos em contato.
          </Typography>
        </div>
        <div>
          <p>Informações para contato</p>
          <form target="_blank" action="https://formsubmit.co/cristoshiwassaki@gmail.com" method="POST">
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Agradecemos pelo seu interesse! Em breve entraremos em contato!" />
            <input type="hidden" name="_subject" value="Empresa Parceira" />
            <div>
              <input type="text" name="Nome" placeholder="Nome" />
            </div>
            <div>
              <input type="text" name="Telefone" placeholder="Fone" />
            </div>
            <div>
              <input type="email" name="Email" placeholder="E-mail" />
            </div>
            <div>
              <textarea name="Mensagem" placeholder="Escreva uma mensagem (opcional)" rows="10"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
        <div className="partners-area">
          <div className="partners-area-title">
            <h2>Nossos Parceiros</h2>
          </div>
          <div className="partners-area-text">
            <p>
              Somos muito gratos aos nossos incríveis parceiros corporativos,
              que nos apoiam em nossos<br/> programas e nos capacitam a servir a
              população LGBTQ+ que precisam e merecem nosso apoio.
            </p>
          </div>
          <div className="partners-area-images">
            <div>
              <img src={logoCPB} alt="logo-CPB" />
              <img src={logoLGBT} alt="logo-LGBT"/>
              <img src={forumempresas} alt="logo-forum-empresas"/>
            </div>
            <div>
              <img src={probono} alt="logo-probono" />
              <img src={atados} alt="logo-atados"/>
              <img src={eternamente} alt="logo-eternamente"/>
            </div>
          </div>
        </div>
      </ActualPartners>
      </>
  )
}