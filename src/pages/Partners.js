import React from "react";
import { Helmet } from "react-helmet";

//Styled Components
import { Partnership } from "../style/partnership";
import { ActualPartners } from "../style/actualPartners";
import { Container } from "../style/reset";

//Images
import flecha from "../assets/flecha-direita.png";
import logoCPB from "../assets/cpb-logo.png";
import logoLGBT from "../assets/lgbt-logo.png";
import forumempresas from "../assets/forum-logo.png";
// import advogados from "../assets/kla-logo.png";
import probono from "../assets/probono-logo.png";
import atados from "../assets/atados-logo.png";
import eternamente from "../assets/eternamente-logo.png";
import { Donate } from "../components/Donate/donate";

export function Partners() {
  return (
    <>
      <Container>
        <Helmet title="Pais Afetivos | Parceiros" />
        <Partnership>
          <div className="partnership-area">
            <div className="partnership-area-title">
              <h2>Parceiros</h2>
            </div>
            <div className="partnership-area-text">
              <p>
                Obrigadx pelo seu interesse em fazer parceria com Pais Afetivos.
                Aqui acreditamos em parcerias de longo prazo onde todos ganham,
                que ajudam nossos parceiros corporativos a alcançar seus
                objetivos, ao mesmo tempo que contribuem para nossa missão de
                acabar com a violência contra pessoas LGBTQ+.
                <br />
                <br />
                Nossas parcerias são personalizadas para se alinhar com as
                prioridades de nossos parceiros corporativos e podem incluir tudo,
                desde doações a campanhas de marketing de causa conjunta,
                atividades locais, oportunidades de engajamento de funcionários e
                patrocínio de eventos.
              </p>
            </div>
            <div className="partnership-area-link">
              <a href="!#">
                Quero ser parceiro <img src={flecha} alt="" />
              </a>
            </div>
          </div>
        </Partnership>
        <ActualPartners>
          <div className="partners-area">
            <div className="partners-area-title">
              <h2>Nossos Parceiros</h2>
            </div>
            <div className="partners-area-text">
              <p>
                Somos muito gratos aos nossos incríveis parceiros corporativos,
                que nos apoiam em nossos programas e nos capacitam a servir a
                população LGBTQ+ que precisam e merecem nosso apoio.
              </p>
            </div>
            <div className="partners-area-images">
              <img src={logoCPB} alt="Logo da ONG CPB" />
              <img src={logoLGBT} alt="Logo LGBT" />
              <img src={forumempresas} alt="" />
              {/* <img src={advogados} alt="" /> */}
              <img src={probono} alt="" />
              <img src={atados} alt="" />
              <img src={eternamente} alt="" />
            </div>
          </div>
        </ActualPartners>
      </Container>
      <Donate />
    </>
  );
}
