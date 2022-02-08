import React from "react";
import { About } from "../../../style/about";

import flecha from "../../../assets/flecha-direita.png";

function SectionAbout() {
  return (
    <About id="quem-somos">
      <div className="about-photo"></div>
      <div className="about-area">
        <h2>Quem somos</h2>
        <div className="about-area-text">
          <p>
            A PaisAfetivos é uma organização sem fins lucrativos que atua por
            redes de contatos televirtuais em todo o Brasil. Viabilizamos apoiar
            e acolher pessoas que tenham seus direitos fundamentais violados por
            conta de preconceitos.
          </p>
          <div className="about-link">
            <a href="/sobre-nós">
              Saiba mais <img src={flecha} alt="incone de flecha" />
            </a>
          </div>
        </div>
      </div>
    </About>
  );
}

export default SectionAbout;
