import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from "style/reset";
import { Donate, ContributionSection } from 'components';
import styled from 'styled-components';

import imagePagehowToHelp from  'assets/image-need-help-page.png'

export const Div = styled.div`
  width: 40%;
  height: 330px;
`;



export function HowToHelp() {
  return(
    <Container>
      <Box
        component="section"
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        padding="60px"
      >
        <Div>
          <Typography
            variant="h2"
            fontSize="36px"
            fontWeight="bold"
            color="#4B4B4B"
            mb="50px"
            mt="40px"
          >
            Como eu posso ajudar?
          </Typography>
          <Typography
            variant="body1"
            fontSize="16px"
            fontWeight="medium"
            color="#545454"
            textAlign="justify"
          >
          A Pais Afetivos é constituída por várias mãos o que a torna mais do que uma instituição de acolhimento para pessoas LGBTQI+ em situação de abandono,  ela é uma organização de progresso do empoderamento, cultura, mobilização social e sensibilização das questões de direitos humanos.<br /><br/>
          Você pode nos ajudar das seguintes formas:
          </Typography>
        </Div>
      <img
        src={imagePagehowToHelp} 
        alt="Grupo de pessoas segurando uma bandeira"
      />
      </Box>

      <ContributionSection />
      <Donate />

    </Container>
  )
}