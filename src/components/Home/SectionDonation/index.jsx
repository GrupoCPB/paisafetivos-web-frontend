import React from "react";
import Box from '@mui/material/Box';
import donateImg from "assets/connectando-pessoas.png";
import * as style from "./styled";
import { H1, P, ButtonDonation, Img } from "./styled";

export function SectionDonation() {
  return (
      <Box
        component="section"
        sx={ style.sectionDonateResponsive }
      >
        <Box
          component="div"
          sx={ style.sectionLefth }
        >
          <H1
            variant="h1"
          >
            Acolhemos pessoas <style.Strong>LGBTQ+</style.Strong> em situação de vulnerabilidade.
          </H1>
          <P>
            Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de
            violência. Nos ajude a transformar a vida dessas pessoas.
          </P>
          <ButtonDonation
            variant="contained"
            sx={ style.buttonFull }
          >
            Faça sua doação
          </ButtonDonation>
          <ButtonDonation
            variant="contained"
            sx={ style.buttonResponsive }
          >
            Doação
          </ButtonDonation>
        </Box>
        <Box
          component="div"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Img src={ donateImg } alt="pessoas ao por do sol"></Img>
        </Box>
      </Box>
  );
}
