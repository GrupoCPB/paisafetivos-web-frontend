import React from "react";
import Box from '@mui/material/Box';
import donateImg from "assets/connectando-pessoas.png";
import * as style from "./styled";

export function SectionDonation() {
  return (
      <Box
        display="flex"
        justifyContent="space-around"
        sx={ style.sectionDonateResponsive }
      >
        <Box
          variant="div"
          sx={ style.sectionLefth }
        >
          <style.H1
            variant="h1"
          >
            Acolhemos pessoas <style.Strong>LGBTQ+</style.Strong> em situação de vulnerabilidade.
          </style.H1>
          <style.P>
            Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de
            violência. Nos ajude a transformar a vida dessas pessoas.
          </style.P>
          <style.ButtonDonation
            variant="contained"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Faça sua doação
          </style.ButtonDonation>
          <style.ButtonDonation
            variant="contained"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            Doação
          </style.ButtonDonation>
        </Box>
        <Box
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <style.Img src={ donateImg } alt="pessoas ao por do sol"></style.Img>
        </Box>
      </Box>
  );
}
