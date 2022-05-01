import React from "react";
import { Helping } from "style/helping";
import { ArrowSignal } from '../SectionAbout/styles'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function SectionNeedHelp() {
  return (
    <Helping id="preciso-ajuda">
      <div className="helping-area">
        <h2>Preciso de Ajuda</h2>
        <div className="helping-area-text">
          <p>
            Se você está passando por algum tipo de violência, estamos aqui para
            te apoiar. A PaisAfetivos compreende a emergência das questões
            violadoras de dignidade humana, principalmente da população LGBTQ+ e
            por isso contamos com uma equipe multidisciplinar para atender você.
          </p>
          <ArrowSignal>
            <a href="/preciso-de-ajuda">
              Saiba mais 
            </a>
            <ArrowRightAltIcon />
          </ArrowSignal>
        </div>
      </div>
      <div className="helping-photo"></div>
    </Helping>
  );
}
