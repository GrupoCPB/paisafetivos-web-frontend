import React from "react";
import { About } from "style/about";
import { ArrowSignal } from './styles'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function SectionAbout() {
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
          <ArrowSignal>
            <a href="/sobre-nós">
              Saiba mais 
            </a>
            <ArrowRightAltIcon />
          </ArrowSignal>
        </div>
      </div>
    </About>
  );
}
