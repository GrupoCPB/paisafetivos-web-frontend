import React from "react";
import { Works } from "../../../style/works";

import ajuda from "../../../assets/ajuda-icon.png";
import acolhimento from "../../../assets/acolhimento-icon.png";
import lar from "../../../assets/lar-afetivo-icon.png";
import acompanhamento from "../../../assets/acompanhamento-icon.png";

function SectionWorks() {
  return (
    <>
      <Works id="como-funciona">
        <h2>Como Funciona</h2>
        <div className="works-cards">
          <div className="works-card">
            <img src={ajuda} alt="icone pedido de ajuda" />
            <h6>Pedido de ajuda</h6>
            <p className="works-card-text">
              Nossa equipe de atendimento receberá seu contato e te encaminhará
              para a equipe multidisciplinar.
            </p>
          </div>
          <div className="works-card">
            <img src={acolhimento} alt="icone acolhimento" />
            <h6>Acolhimento</h6>
            <p className="works-card-text">
              Nossa equipe multidisciplinar atenderá a demanda e trabalhará de
              acordo com a necessidade de cada atendido.
            </p>
          </div>
          <div className="works-card">
            <img src={lar} alt="icone lar afetivo" />
            <h6>Lar Afetivo</h6>
            <p className="works-card-text">
              Se necessário, nossa pessoa acolhida é direcionada a um Lar
              Afetivo ou uma Casa de Acolhimento (ONG).
            </p>
          </div>
          <div className="works-card">
            <img src={acompanhamento} alt="icone acompanhamento" />
            <h6>Acompanhamento</h6>
            <p className="works-card-text">
              A Equipe Multidisciplinar da PaisAfetivos acompanha as demandas do
              início ao fim, realizando acompanhamento contínuo.
            </p>
          </div>
        </div>
      </Works>
    </>
  );
}

export default SectionWorks;
