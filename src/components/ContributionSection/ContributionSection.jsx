import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

import flag from 'assets/icon-flag.png';
import { ArrowSignal } from 'components/Home/SectionAbout/styles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const DivSectionRight = styled.div`
  width: 539px;
`;

export const DivSectionleft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
        >
          <DivSectionleft>
            <img src={flag} alt="bandeira" />
            <div>
              <Typography>
                Doações
              </Typography>
              <ArrowSignal>
              <a href="/">
                Para Doar 
              </a>
              <ArrowRightAltIcon />
            </ArrowSignal>
            </div>
          </DivSectionleft>
          <DivSectionRight>
            <Typography>
              Você pode doar qualquer valor para manutenção e contribuição dos projetos da PaisAfetivos, além de roupas,alimentos e demais elementos.
            </Typography>
          </DivSectionRight>
        </Box>
        <Box
          component="section"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <DivSectionleft>
            <img src={flag} alt="bandeira" />
            <div>
              <Typography>
                Voluntário
              </Typography>
              <ArrowSignal>
              <a href="/">
                Seja um voluntário 
              </a>
              <ArrowRightAltIcon />
            </ArrowSignal>
            </div>
          </DivSectionleft>
          <DivSectionRight>
            <Typography>
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
        >
          <DivSectionleft>
            <img src={flag} alt="bandeira" />
            <div>
              <Typography>
                Aniversário Solidário
              </Typography>
              <ArrowSignal>
              <a href="/">
                Colabore conosco 
              </a>
              <ArrowRightAltIcon />
            </ArrowSignal>
            </div>
          </DivSectionleft>
          <DivSectionRight>
            <Typography>
              Faça seu Aniversário Solidário e ajude a #PaisAfetivos Você pode sugerir que cada um de seus convidados destine um valor para as ações da ong e esta doação seria uma forma de seus amigos te presentearem em seu aniversário.
            </Typography>
          </DivSectionRight>
        </Box>
    </>
  );
}
