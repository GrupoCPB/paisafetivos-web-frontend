import { TextField, Typography } from '@mui/material'
import { Form } from 'components'
// import * as styles from './style'
// import { P } from './style'

export function PartnersForm() {
  return(
    <>
      <Typography variant="body1">Informações para contato</Typography>
      <Form
        subject="Empresa Parceira"
      >
        <TextField
         variant="filled"
         type="text"
         name="Nome"
         placeholder="Nome" />
        
        <TextField
          variant="filled"
          type="text"
          name="Fone"
          placeholder="Fone" />
        
        <TextField
          variant="filled"
          type="email"
          name="E-mail"
          placeholder="E-mail" />

        <TextField
          multiline
          rows={4}
          name="Mensagem"
          placeholder="Escreva uma mensagem (opcional)" />
      </Form>
    </>
  )
}