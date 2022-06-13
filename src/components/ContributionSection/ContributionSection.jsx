import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import flag from 'assets/icon-flag.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import theme from 'style/theme'

import FormDialog from "components/HowHelp/formDialog";

export const ArrowSignal = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${theme.palette.secondary.main};

  a {
      color: ${theme.palette.secondary.main};
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
    }
`;

export const DivSectionRight = styled.div`
  width: 539px;
  margin-right: 7%;
`;

export const DivSectionleft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
  
  img {
    margin-right: 26px;
  }
`;

export function ContributionSection() {
  return(
    <>
      <Box
          component="section"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          height="145px"
        >
          <DivSectionleft>
            <img src={flag} alt="bandeira" />

            <div>
              <Typography
                variant="h4"
                fontSize="32px"
                fontWeight="bold"
                color="#4B4B4B"
                mb="5px"
              >
                Doações
              </Typography>
              <ArrowSignal>
              <a href="/"> Para Doar </a>
                <ArrowRightAltIcon />
              </ArrowSignal>
            </div>

          </DivSectionleft>
          <DivSectionRight>
            <Typography
              variant="body1"
              fontSize="16px"
              fontWeight="medium"
              color="#5D5D66"
            >
              Você pode doar qualquer valor para manutenção e contribuição dos projetos da PaisAfetivos, além de roupas, alimentos e demais elementos.
            </Typography>
          </DivSectionRight>
        </Box>
        <Box
          component="section"
          backgroundColor="#FBFBFB"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          height="145px"
        >
          <DivSectionleft>
            <img src={flag} alt="bandeira" />
            <div>
              <Typography
                variant="h4"
                fontSize="32px"
                fontWeight="bold"
                color="#4B4B4B"
                mb="5px"
              >
                Voluntariado
              </Typography>
              <ArrowSignal>
              <a 
                href="https://t.me/VoluntariadoGrupoCPB"
                target="_blank"
                rel="noreferrer"
              > Seja um voluntário </a>
                <ArrowRightAltIcon />
              </ArrowSignal>
            </div>
          </DivSectionleft>
          <DivSectionRight>
            <Typography
              variant="body1"
              fontSize="16px"
              fontWeight="medium"
              color="#5D5D66"
            >
              Você pode nos ajudar com nosso trabalho como voluntário. Como atuamos de forma multidisciplinar todo conhecimento é bem vindo. Entre em     contato conosco e te apresentaremos nossa demanda.
            </Typography>
          </DivSectionRight>
        </Box>
        <Box
          component="section"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          height="145px"
        >
          <DivSectionleft>
            <img src={flag} alt="bandeira" />
            <div>
              <Typography
                variant="h4"
                fontSize="32px"
                fontWeight="bold"
                color="#4B4B4B"
                mb="5px"
              >
                Aniversário Solidário
              </Typography>
              <FormDialog name="Colabore conosco" />
            </div>
          </DivSectionleft>
          <DivSectionRight>
            <Typography
              variant="body1"
              fontSize="16px"
              fontWeight="medium"
              color="#5D5D66"
            >
              Faça seu Aniversário Solidário e ajude a #PaisAfetivos<br/> Você pode sugerir que cada um de seus convidados destine um valor para as ações da ong e esta doação seria uma forma de seus amigos te presentearem em seu aniversário.
            </Typography>
          </DivSectionRight>
        </Box>
    </>
  );
}
