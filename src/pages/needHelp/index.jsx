import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

import { Form, FormInput, InputMultiline } from 'components'

import imagePageNeedHelp from  'assets/image-need-help-page.png'
import maoFechada from  'assets/mao-fechada.png'


export const Main = styled.main`
  display: flex;
  box-sizing: border-box;
`;

export function NeedHelp() {
  return (
    <>
      <HelmetProvider>
        <Helmet title="Pais Afetivos | Preciso de Ajuda" />
      </HelmetProvider>
      <Main>
        <Box
          boxSizing="border-box"
          width="50%"
          component="section"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            boxSizing="border-box"
            width="480px"
            height="600px"
            mt="10%"
            component="div"
          >
            <Typography
              variant="h1"
              align="justify"
              fontSize="32px"
              color="#545454"
              fontWeight="Bold"
              mb="16px"
            >
              Para podermos te ajudar, nós precisamos de alguns dados.
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize="16px"
              color="#545454"
              fontWeight="Medium"
            >
              Preencha os campos abaixo com seus dados pessoais para podermos entrar em contato com você.
            </Typography>
            <Form 
              subject="Preciso de ajuda"
            >
              <FormInput
                variant="filled"
                label=""
                type="text"
                name="Nome"
                placeholder="Nome" />
              <FormInput
                variant="filled"
                label=""
                type="text"
                name="Fone"
                placeholder="Fone" />
              <FormInput
                variant="filled"
                label=""
                type='email'
                placeholder="E-mail" />
              <InputMultiline
                rows="4"
                placeholder="Escreva uma mensagem(opcional)" />
            </Form>
          </Box>
        </Box>
        <Box
          width="50%"
          component="section"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="div"
            boxSizing="border-box"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mt="10%"
            width="550px"
          >
            <img
              src={imagePageNeedHelp} 
              alt="Grupo de pessoas segurando uma bandeira"
            />
            <Typography
              variant="h4"
              align="center"
              fontSize="32px"
              color="#FF40A7"
              fontWeight="Bold"
              mt="30px"
            >
              Você não está sozinho!
            </Typography>
            <Typography
              variant="body2"
              align="center"
              fontSize="16px"
              color="#5D5D66"
              mt="20px"
              textAlign="justify"
            >
            Se você está passando por algum tipo de violência, estamos aqui para te apoiar.  
            A PaisAfetivos compreende a emergência das questões violadoras de dignidade humana, principalmente da população LGBTQ+ e por isso aponta serviços públicos e solidários certificados. 
            Contamos com uma equipe multidisciplinar, composta por voluntários, incluindo agentes de atendimento, psicólogos, assistentes sociais, advogados, entre outros.<br/><br/><br/>
            Nossa equipe entrará em contato o mais breve possível!
            </Typography>
          </Box>
        </Box>
      </Main>
      <Box
        component="div"
        boxSizing="border-box"
        display="flex"
        mt="100px"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        bgcolor="#F7EFF3"
      >
        <Box
          component="div"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          width="600px"
        >
          <Typography
                variant="h1"
                align="left"
                fontSize="32px"
                color="#545454"
                fontWeight="Bold"
                mb="60px"
                >
                Em caso de emergência ligue para: 
              </Typography>
              <Typography
                variant="body2"
                align="left"
                fontSize="16px"
                color="#5D5D66"
                >
              Denúncias: Disque 100 para denunciar violação dos direitos humanos. <br /><br /><br />
              CVV: Disque 188 para atendimento emocional gratuito de qualquer
              aparelho para o centro de  valorização da vida. 
              </Typography>
          </Box>
        <img src={ maoFechada } alt="mao fechada" />
      </Box>
    </>
  );
}