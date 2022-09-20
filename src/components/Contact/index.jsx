import MailBox from "assets/objects.png";

import { H2, Intro } from "./styles";
import * as style from "./styles";
import { Form, FormInput, InputMultiline } from "components";
import { Box, Typography } from "@mui/material";

export function ContactPage() {
  return (
    <Box
      sx={style.Display}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header sidebar" "main  sidebar"`
        }}
      >
        <Box sx={{ 
          margin: "9em",
          gridArea: "header"}}>
          <Typography
            align="justify"
          >
                 <H2>Queremos te ouvir!</H2>
                 <Intro>
                   Se voce ainda estiver com alguma dúvida ou necessitar de uma
                   informação, não deixe de entrar em contato com a gente
                   através do formulário abaixo ou por uma de nossas redes sociais.
                 </Intro>
               </Typography>
        </Box>
        <Box sx={{ mt:"3em", gridArea: "sidebar" }}>
        <Box component="div" sx={style.contactForm}>
            <Form subject="Entre em Contato!">
              <FormInput
                variant="filled"
                type="text"
                name="Nome"
                placeholder="Nome"
                required={true}
              />
              <FormInput
                variant="filled"
                type="email"
                name="E-mail"
                placeholder="E-mail"
                required={true}
              />
              <FormInput
                variant="filled"
                type="text"
                name="Telefone"
                placeholder="Telefone(opcional)"
              />
              <InputMultiline rows={2} placeholder="Escreva uma mensagem" />
            </Form>
          </Box>
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <img src={MailBox} alt="" />
        </Box>
      </Box>
      
    </Box>
      
  );
}
