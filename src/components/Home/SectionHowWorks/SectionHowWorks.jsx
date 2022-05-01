import Box from "@mui/material/Box";
import * as style from './style';
import { Title, TitleCard,PCard } from './style';

import number_1 from 'assets/number_1.png'
import number_2 from 'assets/number_2.png'
import number_3 from 'assets/number_3.png'
import number_4 from 'assets/number_4.png'

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
        </Box>
        <Box
          component="div"
          sx={ style.modes }
        >
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
        </Box>
        <Box
          component="div"
          sx={ style.modes }
        >
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