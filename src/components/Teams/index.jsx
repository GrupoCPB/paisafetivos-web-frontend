import { Avatar, Container, Stack, Typography } from '@mui/material'
import { OurTeamStyled } from 'style/team'

import executive from 'assets/Alessandra-Keiko-Aoki-Diretora-Executiva.png'
import coordinator from 'assets/Mariana.png'
import director from 'assets/raphael.png'
import group from 'assets/equipe.png'

function PeopleInfo(props) {
  return (
    <Container>
      <Avatar 
        src={props.image}
        sx={{ width: 150, height: 150 }}
      />
      <Typography
        variant='h6'>{props.name}</Typography>
      <Typography>Função: {props.occupation}</Typography>
      <Typography>Contrato: Voluntário</Typography>
      <Typography>Instagram: {props.insta}</Typography>
    </Container>
  )
}

export function OurTeam (){
  return(
    <OurTeamStyled>
        <div className="info-inicial">
          <div>
            <h2>Nossa Equipe</h2>
            <p>
              Essas são as pessoas responsáveis pela nossa ONG. <br />Além delas, 
              contamos com diversos voluntários nas nossas equipes multidisciplinares, 
              como psicólogos, assistentes sociais, advogados, <br />agentes de atendimento, entre outros. </p>
            <p>Se você gostaria de fazer parte de nossa equipe, entre em contato conosco.</p>
          </div>
          <img src={group} alt='imagem de uma equipe'/>
        </div>
      <section className='executive-people'>
          <h4>Administrativo</h4>
          <Stack direction='row'>
            <PeopleInfo 
              image={director}
              name="Raphael América"
              occupation="Diretor Geral"
              insta="@oamericaraphael" 
            />

            <PeopleInfo 
              image={executive}
              name="Alessandra Keiko"
              occupation='Diretora Executiva'
              insta="@alessandrakeikoaoki"            
            />

            <PeopleInfo
              image={coordinator}
              name="Mariana Gidra"
              occupation='Coord. Multidisciplinar'
              insta='@marianagidra'
            />
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
          <PeopleInfo
              image={coordinator}
              name="Mariana Gidra"
              occupation='Coord. de RH'
              insta='@marianagidra'
            />
        </article>
        <article className='marketing-people'>
          <h4>Marketing</h4>
          <Container>
            <Avatar
              sx={{ width: 100, height: 100}}
            >JL</Avatar>
            <Typography variant='h6'>Julia Leonello</Typography>
            <Typography>Função: Coord. Social Media</Typography>
            <Typography>Contrato: Voluntária</Typography>
            <Typography>Instagram: @juleonello</Typography>
          </Container>
        </article>
      </section>
    </OurTeamStyled>
  )
}