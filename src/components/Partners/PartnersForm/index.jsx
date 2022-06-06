import { Box, TextField } from '@mui/material'
import { Form } from 'components'
import { Title } from './style'
import * as style from './style'


export function PartnersForm() {
  return(
    <Box
      component="div"
      sx= { style.sectionForm }
    >
      <Title>Informações para contato</Title>
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
    </Box>
  )
}