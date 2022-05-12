import { Grid } from '@mui/material'

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
      source: forumempresas,
      alt: "Logo do Fórum de empresas e direitos LGBTI+"
    },
    {
      id: 6,
      source: probono,
      alt: "Logo do Instituto Probono"
    },
    {
      id: 7,
      source: atados,
      alt: "Logo da Ong Atados"
    },
    {
      id: 8,
      source: eternamente,
      alt: "Logo da Ong EternamenteSou"
    }
  ]

  return(
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm:2, md: 3 }}>
        {partnerLogos.map((partnerLogo) => (
          <Grid 
            item xs={3}
            key={partnerLogo.id}
          >
            <img 
              src={partnerLogo.source} 
              alt={partnerLogo.alt} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}