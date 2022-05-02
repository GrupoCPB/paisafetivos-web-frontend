import * as React from 'react';

import {  
        Button, 
        Dialog, DialogActions, DialogContent, DialogTitle,  
      } 
from '@mui/material';

import { HowHelpStyle } from 'style/howHelp'
import { ArrowRightAlt } from '@mui/icons-material';


import { Form } from 'components/Form'


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
        endIcon={<ArrowRightAlt color="secondary"/>}
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
          <Form 
            subject="Aniversário Solidário"
            variant="outlined"
            label="Qual o seu nome?"
            placeholder="Digite seu nome completo"
            type="text"
            name="Nome completo"
            label2="E-mail para contato"
            name2="Email"
            type2="email"
            placeholder2="nome@mail.com"
            label3="Número de celular"
            placeholder3='(00)9999-9999'
            labelMultiline='Gostaria de nos deixar uma mensagem?'
            placeholderMultiline="Digite sua mensagem aqui"

          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </HowHelpStyle>
  );
}
