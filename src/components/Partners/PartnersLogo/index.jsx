import { Grid } from '@mui/material'
import { GridLogos } from './style'

import logoGlobal from 'assets/global_logo.png';
import paisamigoslogo from 'assets/paisamigos_logo1.png'
import logoCPB from "assets/cpb-logo.png";
import logoLGBT from "assets/lgbt-logo.png";
import forumempresas from "assets/forum-logo.png";
import probono from "assets/probono-logo.png";
import atados from "assets/atados-logo.png";
import eternamente from "assets/eternamente-logo.png";


export function PartnersLogo(){
  const partnerLogos = [
    {
      id: 1,
      source: logoGlobal,
      alt: "Logo da Ong Global Org"
    },
    {
      id: 2,
      source: logoCPB,
      alt: "Logo da Ong CPB"
    },
    {
      id: 3,
      source: logoLGBT,
      alt: "Logo da Ong Lgbt+"
    },
    {
      id: 4,
      source: paisamigoslogo,
      alt: "Logo da Ong Pais Amigos"
    },
    {
      id: 5,
      source: probono,
      alt: "Logo do Instituto Probono"
    },
    {
      id: 6,
      source: forumempresas,
      alt: "Logo do Fórum de empresas e direitos LGBTI+"
    },
    {
      id: 7,
      source: eternamente,
      alt: "Logo da Ong EternamenteSou"
    },
    {
      id: 8,
      source: atados,
      alt: "Logo da Ong Atados"
    }
  ]


  return(
    <>
      <GridLogos
        container 
        rowSpacing={2} 
        columnSpacing={{ xs: 1, sm:2, md: 3 }}
      >
        {partnerLogos.map((partnerLogo) => (
          <Grid 
            item 
            xs={6} sm={4} lg={3}
            key={partnerLogo.id}
          >
            <img 
              src={partnerLogo.source} 
              alt={partnerLogo.alt} />
          </Grid>
        ))}
      </GridLogos>
    </>
  )
}