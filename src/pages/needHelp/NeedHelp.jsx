import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from "style/reset";
import { Form } from 'components'
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  box-sizing: border-box;
  form {
    box-sizing: border-box;
  }
`;

export function NeedHelp() {
  return (
    <Container>
      <Main>
        <Box
          boxSizing="border-box"
          width="50%"
          component="div"
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
              Para Podermos te ajudar, nós precisamosde alguns dados.
            </Typography>
            <Typography
              variant="subtitle2"
              fontSize="16px"
              color="#545454"
              fontWeight="Meduium"
            >
              Preencha os camposabaixo com seus dados pessoais para podermos entrar em contato
            </Typography>
            <Form />
          </Box>
        </Box>
        <Box
          width="50%"
          component="div"
          bgcolor="blue"
        >
          <h1>teste</h1>
        </Box>
      </Main>
      <Box
        bgcolor="blue"
      >
        teste
      </Box>
    </Container>
  );
}