import { Box } from "@mui/material";
import { Form, FormInput, InputMultiline } from "components";
import { Title } from "./style";
import * as style from "./style";

export function PartnersForm() {
  return (
    <Box component="div" sx={style.sectionForm}>
      <Title>Informações para contato</Title>
      <Form subject="Empresa Parceira">
        <FormInput
          variant="filled"
          type="text"
          name="Nome"
          placeholder="Nome"
        />

        <FormInput
          variant="filled"
          type="text"
          name="Fone"
          placeholder="Fone"
        />

        <FormInput
          variant="filled"
          type="email"
          name="e-mail"
          placeholder="E-mail"
        />

        <InputMultiline
          rows={2}
          placeholder="Escreva uma mensagem (opcional)"
        />
      </Form>
    </Box>
  );
}
