import { Avatar, Container, Stack, Typography } from '@mui/material'
import { OurTeamStyled } from 'style/team'

import executive from 'assets/Alessandra-Keiko-Aoki-Diretora-Executiva.png'
import coordinator from 'assets/Mariana.png'
import director from 'assets/raphael.png'
import group from 'assets/equipe.png'

function PeopleInfo(props) {
  return (
    <Container>
      {
        props.image ? 
          <Avatar src={props.image}sx={{ width: 150, height: 150 }}/> 
          : 
          <Avatar sx={{ width: 100, height: 100 }}>{props.initials}</Avatar>
      }
      <Typography
        variant='h5'>{props.name}</Typography>
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
              Essas são as pessoas responsáveis pela nossa ONG. Além delas, <br />
              contamos com diversos voluntários nas nossas equipes <br />multidisciplinares, 
              como psicólogos, assistentes sociais, advogados,<br /> agentes de atendimento, entre outros. </p>
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
            <PeopleInfo
              initials='FS'
              name='Fábio Soares'
              occupation='Diretor Financeiro'
              insta='@fabio.soares2005'/>
        </article>
        <section className="hr-people">
          <h4>Recursos Humanos</h4>
          <PeopleInfo
              image={coordinator}
              name="Mariana Gidra"
              occupation='Coord. de RH'
              insta='@marianagidra'
            />
        </section>
        <section className='marketing-people'>
          <h4>Marketing</h4>
          <PeopleInfo
            initials='JL'
            name='Julia Leonello'
            occupation= 'Coord. Social Media'
            insta='@juleonello'
          />
        </section>
      </section>
    </OurTeamStyled>
  )
}