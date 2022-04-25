import React from "react";
import Box from '@mui/material/Box';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import * as style from './style';
import { H2, H4, PCard, PBody, ButtonCard } from './style';


export function SectionHelpToo() {
  return(
    <Box
      sx={ style.sectionHelpToo }
    >
      <H2 variant="h2">Você também pode ajudar!</H2>
      <PBody>Aproposta da Pais Afetivos é conectar pessoas LGBTQ+ que estão sofrendo violência em seus lares com voluntários dispostos a recebê-los. Você também pode ajudar essas mudar vidas, das seguintes formas: </PBody>
      <Box
        sx={ style.sectionBotton }
      >
        <Box
          backgroundColor="#37AEB0"
          sx={ style.card }
        >
          <H4 variant="h4" >SEJA UM ANFITRIÃO</H4>
          <PCard variant="body1">Caso você possa contribuir hospedando  vítimas, cadastre-se e entraremos em contato!</PCard>
          <ButtonCard
            style={ { color: "#37AEB0" } } 
            href="/"
          >
            Quero ser um anfitrião!
            <ArrowRightAltIcon />
          </ButtonCard>
        </Box>
        <Box
          backgroundColor="#F97778"
          sx={ style.card }
        >
          <H4 variant="h4" >FAÇA UMA DOAÇÃO</H4>
          <PCard variant="body1">Aceitamos diversos tipos de doações, que farão toda a diferença para nossos acolhidos!</PCard>
          <ButtonCard
            style={ { color: "#F97778" } }
            href="/"
          >
            Quero doar!
            <ArrowRightAltIcon />
          </ButtonCard>
        </Box>
        <Box
          backgroundColor="#F9C87F"
          sx={ style.card }
        >
        <H4 variant="h4">DIVULGUE!</H4>
          <PCard variant="body1">Siga-nos em nossas redes sociais, curta e compartilhe nosso conteúdo! </PCard>
          <ButtonCard
            style={ { color: "#F9C87F" } }
            href="/"
          >
            Conheça nossas redes!
            <ArrowRightAltIcon />
          </ButtonCard>
        </Box>
      </Box>
    </Box>
  );
}