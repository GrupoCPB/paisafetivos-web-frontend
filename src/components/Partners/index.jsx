import { ActualPartners } from 'style/actualPartners'
import logoCPB from "assets/cpb-logo.png";
import logoLGBT from "assets/lgbt-logo.png";
import forumempresas from "assets/forum-logo.png";
import probono from "assets/probono-logo.png";
import atados from "assets/atados-logo.png";
import eternamente from "assets/eternamente-logo.png";




export function PartnersPage(){
  return(
    <>
    <ActualPartners>
      <div className="header-partners">
        <h2>Seja um parceiro da<br/> ONG Pais Afetivos</h2>
      </div>
      {/* <form target="_blank" action="https://formsubmit.co/projetopaisafetivos@gmail.com" method="POST">
        <div>
          <div>
            <div>
              <input type="text" name="name" placeholder="Full Name" required />
            </div>
          </div>
        </div>
        <div>
          <textarea placeholder="Your Message" name="message" rows="10" required></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form> */}
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