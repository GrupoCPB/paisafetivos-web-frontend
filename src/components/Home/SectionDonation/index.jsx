import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import donateImg from "assets/connectando-pessoas.png";
import styled from "styled-components";
import { Button } from "@mui/material";

export const ButtonDonation = styled(Button)`
  font-size: 20px;
  padding: 19px 59px;
  border-radius: 10px;
  font-weight: 800;
  line-height: 30px;
  color: #FFFFFF;
  background-color:  #398791;
  margin-bottom: 40px;
  transition: all ease 0.2s;
  &:hover {
    filter: brightness(120%);
  }
`;

export const Strong = styled.strong`
  color: #f63ebb;
`;

export const H1 = styled(Typography)`
  color: #4B4B4B;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 57px;
  letter-spacing: 0.0025em;
  margin-bottom: 40px;
  margin-top: 35px;
`;

export const Img = styled.img`
  width: 606px;
  height: 486.01px;
`;

export const P = styled.p`
  font-weight: 500;
  color: #545454;
  font-size: 16px;
  margin-bottom: 40px;
`;

export function SectionDonation() {
  return (
      <Box
        mt="80px"
        display="flex"
        justifyContent="space-around"
        bgcolor="#F8F8F8;"
      >
        <Box
          variant="div"
          width="429px"
          sx={{ display: { xs: "flex" }, flexDirection: { xs: "column" } , justifyContent: { xs: "center" } } }
        >
          <H1
            variant="h1"
          >
            Acolhemos pessoas <Strong>LGBTQ+</Strong> em situação de vulnerabilidade.
          </H1>
          <P>
            Atuamos desde 2009 acolhendo pessoas LGBTQ+ que são vítimas de
            violência. Nos ajude a transformar a vida dessas pessoas.
          </P>
          <ButtonDonation
            variant="contained"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Faça sua doação
          </ButtonDonation>
          <ButtonDonation
            variant="contained"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            Doação
          </ButtonDonation>
        </Box>
        <Box
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Img src={ donateImg } alt="pessoas ao por do sol"></Img>
        </Box>
      </Box>
  );
}
