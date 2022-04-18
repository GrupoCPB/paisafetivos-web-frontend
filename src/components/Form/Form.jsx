import { Button, TextField, Typography } from '@mui/material'

export function Form() {
  return (
    <div className="partners-form">
    <Typography variant="body1">Informações para contato</Typography>
    <form
      target="_blank"
      action="https://formsubmit.co/projetopaisafetivos@gmail.com"
      method="POST"
    >

      <input
        type="hidden"
        name="_autoresponse"
        value="Agradecemos pelo seu interesse! Em breve entraremos em contato!"
      />

      <input 
        type="hidden"
        name="_template" 
        value="table"
      />

      <input
        type="hidden"
        name="_subject"
        value="Empresa Parceira"
      />

      <div>
        <TextField 
          variant="filled" 
          margin="dense"
          fullWidth 
          type="text" 
          name="Nome" 
          placeholder="Nome" />
      </div>

      <div>
        <TextField
          variant="filled"
          margin="dense"
          fullWidth
          type="text"
          name="Telefone"
          placeholder="Fone"
        />
      </div>

      <div>
        <TextField
          variant="filled"
          margin="dense"
          fullWidth type="email"
          name="Email"
          placeholder="E-mail"
        />
      </div>

      <div>
        <TextField
          multiline
          margin="dense"
          fullWidth
          name="Mensagem"
          placeholder="Escreva uma mensagem (opcional)"
          rows="10"
        />
      </div>

      <Button 
        sx={{ mt: 1, fontSize: 18, fontWeight: 900}}
        variant="contained"
        size="large"
        fullWidth
        type="submit"
      >
        Enviar
      </Button>

    </form>
  </div>
  );
}