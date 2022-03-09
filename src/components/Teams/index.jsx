import { Avatar, Container, Stack, Typography } from '@mui/material'
import { OurTeamStyled } from 'style/team'

import executive from 'assets/Alessandra-Keiko-Aoki-Diretora-Executiva.png'
import coordinator from 'assets/Mariana.png'
import director from 'assets/raphael.png'
import group from 'assets/equipe.png'



export function OurTeam (){
  return(
    <OurTeamStyled>
        <div className="info-inicial">
          <div>
            <h2>Nossa Equipe</h2>
            <p>
              Essas são as pessoas responsáveis pela nossa ONG. Além delas, 
              contamos com diversos voluntários nas nossas equipes multidisciplinares, 
              como psicólogos, assistentes sociais, advogados, agentes de atendimento, entre outros. </p>
            <p>Se você gostaria de fazer parte de nossa equipe, entre em contato conosco.</p>
          </div>
          <img src={group} alt='imagem de uma equipe'/>
        </div>
      <section className='executive-people'>
          <h4>Administrativo</h4>
        <Stack direction='row'>
          <Container>
            <Avatar 
              src={director}
              sx={{ width: 160, height: 160}}
            />
                <Typography
                  variant='h6'
                >
                    Raphael América
                </Typography>
                <Typography>
                    Função: Diretor Geral
                </Typography>
                <Typography>
                    Contrato: Voluntário
                </Typography>
                <Typography>
                    Instagram: @oamericaraphael
                </Typography>
              </Container>
            <Container>
              <Avatar
                src={executive}
                sx={{ width: 160, height:160}}
              />
              <Typography
                variant='h6'
              >
                Alessandra Keiko
              </Typography>
              <Typography>
              Função: Diretora Executiva
              </Typography>
              <Typography>
                Contrato: Voluntária
              </Typography>
              <Typography>
                Instagram: @alessandrakeikoaoki
              </Typography>
            </Container>
               
          <Container>
            <Avatar
              src={coordinator}
              sx= {{ width: 160, height: 160}}
            />
            <Typography
              variant='h6'
            >Mariana Gidra
            </Typography>
            <Typography>Função: Coord. Multidisciplinar</Typography>
            <Typography>Contrato: Voluntária</Typography>
            <Typography>Instagram: @marianagidra</Typography>
          </Container>  
        </Stack>
        <article className="finance-people">
          <h4>Financeiro</h4>
            <Avatar
              sx={{ width: 100, height: 100}}
            >FS</Avatar>
            <Typography variant='h6'>Fábio Soares</Typography>
            <Typography>Função: Diretor Financeiro</Typography>
            <Typography>Contrato: Voluntário</Typography>
            <Typography>Instagram: @fabio.soares2005</Typography>
        </article>
        <article className="hr-people">
          <h4>Recursos Humanos</h4>
          <Avatar
          src={coordinator}
          sx={{ width: 160, height: 160 }} />
          
          <Typography>Mariana Gidra</Typography>
          <Typography>Função: Coord. de RH</Typography>
          <Typography>Contrato: Voluntária</Typography>
          <Typography>Instagram: @marianagidra</Typography>
        </article>
        <article className='marketing-people'>
          <h4>Marketing</h4>
          <Avatar
            sx={{ width: 100, height: 100}}
          >JL</Avatar>
          <Typography variant='h6'>Julia Leonello</Typography>
          <Typography>Função: Coord. Social Media</Typography>
          <Typography>Contrato: Voluntária</Typography>
          <Typography>Instagram: @juleonello</Typography>
        </article>
      </section>
    </OurTeamStyled>
  )
}