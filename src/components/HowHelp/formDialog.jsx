import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { HowHelpStyle } from "style/howHelp";
import { ArrowRightAlt } from "@mui/icons-material";

import { Form, FormInput, InputMultiline } from "components";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <HowHelpStyle>
      <Button
        onClick={handleClickOpen}
        color="secondary"
        endIcon={<ArrowRightAlt color="secondary" />}
        sx={{
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        {props.name}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          color="primary"
          fontWeight="700"
          fontSize="30px"
          textAlign="center"
        >
          Vamos juntos transformar vidas!
        </DialogTitle>
        <DialogContent>
          <Form subject="Aniversário Solidário">
            <FormInput
              autoFocus="true"
              variant="outlined"
              label="Qual o seu nome?"
              placeholder="Digite seu nome completo"
              type="text"
              name="Nome completo"
            />

            <FormInput
              variant="outlined"
              label="E-mail para contato"
              placeholder="nome@mail.com"
              type="email"
              name="E-mail"
            />

            <FormInput
              variant="outlined"
              label="Número de celular"
              placeholder="(00)9999-9999"
              type="text"
              name="Fone"
            />

            <InputMultiline
              rows={4}
              label="Gostaria de nos deixar uma mensagem?"
              placeholder="Digite sua mensagem aqui"
              name="Mensagem"
            />
          </Form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </HowHelpStyle>
  );
}
