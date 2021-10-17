import React from "react";
import { Helmet } from "react-helmet";

//Styled Components
import { Partnership } from "./partnership";
import { Container } from "./reset";

//Images
import flecha from '../../assets/flecha-direita.png';

export function Partners() {
  return (
    <Container>
      <Helmet title="Pais Afetivos | Parceiros" />
      <Partnership>
        <div className="partnership-area">
          <div className="partnership-area-title">
            <h1>Parceiros</h1>
          </div>
          <div className="partnership-area-text">
            <p>
              Obrigadx pelo seu interesse em fazer parceria com Pais Afetivos.
              Aqui acreditamos em parcerias de longo prazo onde todos ganham,
              que ajudam nossos parceiros corporativos a alcançar seus
              objetivos, ao mesmo tempo que contribuem para nossa missão de
              acabar com a violência contra pessoas LGBTQ+.
              <br /><br />
              Nossas parcerias são personalizadas para se alinhar com as
              prioridades de nossos parceiros corporativos e podem incluir tudo,
              desde doações a campanhas de marketing de causa conjunta,
              atividades locais, oportunidades de engajamento de funcionários e
              patrocínio de eventos.
            </p>
          </div>
          <div className="partnership-area-link">
            <a>Quero ser parceiro <img src={flecha}/></a>
          </div>
        </div>
      </Partnership>
    </Container>
  );
}
