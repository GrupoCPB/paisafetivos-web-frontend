import Box from "@mui/material/Box";
import * as style from './style';
import { Title, TitleCard,PCard } from './style';

import number_1 from 'assets/number_1.png'
import number_2 from 'assets/number_2.png'
import number_3 from 'assets/number_3.png'
import number_4 from 'assets/number_4.png'
import designer from 'assets/designer.png'
import hangout from 'assets/group_hangout.png'
import travelers from 'assets/travelers.png'
import world from 'assets/world_.png'

export function SectionHowWorks() {
  return(
    <Box
      component="section"
      sx={ style.sectionHowWorks }
    >
      <Box
        component="div"
        sx={ style.iternalSetcion }
      >
        <Title variant="h2"> Como Funcionamos</Title>
        <Box
          component="div"
          sx={ style.modes }
        >
          <img src={ number_1} alt="numero 01" />
          <Box
            component="div"
            sx={ style.cardText }
          >
            <TitleCard>Recebemos um pedido de ajuda</TitleCard>
            <PCard>
              Ao recebermos um novo pedido de ajuda, definimos qual a abordagem mais adequada. Nossos serviços são: auxílio psicológico, atendimento social e acolhimento solidário.
            </PCard>
          </Box>
          <img src={designer} alt="figura de uma pessoa em frente a um computador" />
        </Box>
        <Box
          component="div"
          sx={ style.modes }
        >
        <img src={hangout} alt="grupo de pessoas conversando usando video call" />
          <img src={ number_2} alt="numero 02" />
          <Box
            component="div"
            sx={ style.cardText }
          >
            <TitleCard>Procuramos Pais Afetivos</TitleCard>
            <PCard>
              Verificamos quais são os Acolhedores cadastrados mais próximos da vítima e entramos em contato.
            </PCard>
          </Box>
        </Box>
        <Box
          component="div"
          sx={ style.modes }
        >
          <img src={ number_3} alt="numero 03" />
          <Box
            component="div"
            sx={ style.cardText }
          >
            <TitleCard>Prestamos auxílio ao acolhido</TitleCard>
            <PCard>
              Havendo a necessidade, a vítima é encaminhada a um Lar Afetivo Parceiro ou a uma Casa de Acolhimento (ONG).
            </PCard>
          </Box>
          <img src={travelers} alt="" />
        </Box>
        <Box
          component="div"
          sx={ style.modes }
        >
          <img src={world} alt="figura de uma pessoa em frente a um globo pesquisando aonde ir" />
          <img src={ number_4} alt="numero 04" />
          <Box
            component="div"
            sx={ style.cardText }
          >
            <TitleCard>Acompanhamos o caso</TitleCard>
            <PCard>
              Acompanhamos todos os casos do início ao fim; prestamos suporte a acolhidos e anfitriões de maneira profissional e humanizada. 
            </PCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}