import React from "react";
import* as style from './styles';
import { H2, Img } from './styles';
import Box from '@mui/material/Box';

import img1 from 'assets/section-about-img-1.png'
import img2 from 'assets/section-about-img-2.png'
import img3 from 'assets/section-about-img-3.png'
import img4 from 'assets/section-about-img-4.png'
import img5 from 'assets/section-about-img-5.png'
import img6 from 'assets/section-about-img-6.png'



export function SectionAbout() {
  return (
    <Box
      component="section"
      sx={ style.sectionAbout }
      id="quem-somos"
    >
      <H2
        variant="h2"
      >
        Quem Somos
      </H2>
      <Box
        component="div"
        sx={ style.sectionImages }
      >
        <Img src={ img6 } alt="foto de pessoas" />
        <Img src={ img5 } alt="foto de pessoas" />
        <Img src={ img4 } alt="foto de pessoas" />
        <Img src={ img3 } alt="foto de pessoas" />
        <Img src={ img2 } alt="foto de pessoas" />
        <Img src={ img1 } alt="foto de pessoas" />
      </Box>
    </Box>
  );
}
