import React from 'react';
import Box from '@mui/material/Box';
import { Title, Paragraph } from './style';
import * as style from './style';


export function SectionJourneysAndGoals() {
  return (
    <Box
      component="section"
      sx={ style.section }
    >
      <Title>Nossa jornada e metas</Title>
      <Paragraph>
        A Pais Afetivos é uma organização sem fins lucrativos que atua por redes de contatos televirtuais em todo o Brasil. Viabilizamos apoiar e acolher pessoas que tenham seus direitos fundamentais violados por conta de preconceitos.
      </Paragraph>
      <Paragraph>
        Em nosso projeto piloto, acolhemos mais de 40 vítimas. Recebemos um retorno muito positivo - e também muita demanda! Hoje em dia, temos o orgulho de dizer que conseguimos expandir muito nosso projeto e podemos prestar suporte para qualquer pessoa LGBTQ+ que se encontre em situação de vulnerabilidade, através de atendimento de profissionais capacitados para a atividade.
      </Paragraph>
      <Paragraph>
        Nosso próximo passo é construir uma sede física para acolhimento emergencial de pessoas LGBTQ+ desabrigadas, ou que não se sentem seguras em seus lares.  Com sua ajuda, poderemos criar esse ponto de apoio!
      </Paragraph>
      <Paragraph>Nossos pontosde apoio</Paragraph>
      <Box
        component="div"
        sx={ style.botton }
      >
        <Box
          component="div"
          sx={ style.card }
        >
          <Title>SEDE PAIS AFETIVOS</Title>
          <Paragraph>
            Será um espaço físico para abrigar vítimas LGBTQI+ em situação de vulnerabilidade.
          </Paragraph>
        </Box>
        <Box
          component="div"
          sx={ style.card }
        >
          <Title>LARES AFETIVOS</Title>
          <Paragraph>
            Formado por voluntários que transformam sua casa em um ponto de acolhimento.
          </Paragraph>
        </Box>
        <Box
          component="div"
          sx={ style.card }
        >
          <Title>ACOLHEDORES SOLIDÁRIOS</Title>
          <Paragraph>
            Formado por voluntários que colaboram com suporte presencial.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
}