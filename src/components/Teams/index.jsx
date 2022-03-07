import { Stack, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { OurTeamStyled } from 'style/team'

import executive from 'assets/Alessandra-Keiko-Aoki-Diretora-Executiva.png'
import coordinator from 'assets/Mariana.png'
import director from 'assets/raphael.png'
import group from 'assets/equipe.png'



export function OurTeam (){
  return(
    <OurTeamStyled>
        <Stack direction='row' spacing={7}>
          <Stack>
            <h2>Nossa Equipe</h2>
            <p>
              Essas são as pessoas responsáveis pela nossa ONG. Além delas, <br />
              contamos com diversos voluntários nas nossas equipes <br /> multidisciplinares, 
              como psicólogos, assistentes sociais, advogados, <br /> agentes de atendimento, entre outros. </p>
            <p>Se você gostaria de fazer parte de nossa equipe, entre em contato conosco.</p>
        </Stack>
        <img src={group} alt='imagem de uma equipe'/>
        </Stack>
      <div>
          <h4>Administrativo</h4>
        <Stack direction='row'>
          <Card>
            <CardMedia
              component='img'
              image={director}
              alt='imagem de Raphael America'
            />
            <CardContent>
              <Typography
                variant='subtitle'
                component='div'>
                  Raphael América
              </Typography>
              <Typography variant='body2'>
                  Função: Diretor Geral
                  Contrato: Voluntário
                  Instagram: @oamericaraphael
              </Typography>
            </CardContent>
          </Card>
          
           

          <Stack>
            
              <p>
                <strong>Alessandra Keiko</strong>
                Função: Diretora Executiva
                Contrato: Voluntária
                Instagram: @alessandrakeikoaoki
              </p>
          </Stack>
          
          <Stack>
            
              <p>
                <strong>Mariana Gidra</strong>
                Função: Coord. Multidisciplinar
                Contrato: Voluntária
                Instagram: @marianagidra
              </p>
          </Stack>  
        </Stack>
        <div>
          <h4>Financeiro</h4>
          
              <p>
              <strong>Fábio Soares</strong>
                Função: Diretor Financeiro
                Contrato: Voluntário
                Instagram: @fabio.soares2005
              </p>
        </div>
        <div>
          <h4>Recursos Humanos</h4>
          <img src='' alt='' />
            <p>
              <strong>Mariana Gidra</strong>
              Função: Coord. de RH
              Contrato: Voluntária
              Instagram: @marianagidra
            </p>
        </div>
        <div>
          <h4>Marketing</h4>
          <img src='' alt='' />
          <p>
            <strong>Julia Leonello</strong>
            Função: Coord. Social Media
            Contrato: Voluntária
            Instagram: @juleonello
          </p>
        </div>
      </div>
    </OurTeamStyled>
  )
}