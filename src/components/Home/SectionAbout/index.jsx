import React from "react";
import { ArrowSignal } from './styles';
import Box from '@mui/material/Box';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function SectionAbout() {
  return (
    <Box>
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
    </Box>
  );
}
