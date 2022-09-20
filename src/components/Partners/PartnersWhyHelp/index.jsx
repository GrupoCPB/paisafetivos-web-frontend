import { Box } from '@mui/material';
import { PartnersForm } from '../PartnersForm';
import { Title, Text, Bold } from './style'
import * as style from './style'


export function WhyHelp() {
  return (
    <Box
      sx={style.sectionWhyHelp}
    >
      <Box>
        <Title>Seja nosso parceiro!</Title>
        <Text>
          <Bold>É importante para a causa:</Bold> Seu suporte fará com<br/> que
          minorias sejam mais incluídas na sociedade.
        </Text>
        <Text>
          <Bold>É bom para os negócios:</Bold> você pode atrair talentos,<br/>
          descobrir novos parceiros e fortalecer a relação <br/>com os demais
          colaboradores.
        </Text>
        <Text>
          Caso queira se tornar um parceiro, basta informar<br/> seus dados para
          contato no formulário ao lado e<br/> entraremos em contato.
        </Text>
      </Box>
      <PartnersForm />
    </Box>
  );
}
