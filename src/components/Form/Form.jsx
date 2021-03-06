import { Button, TextField } from '@mui/material';

export function Form(props) {
  return (
    <form
      target="_blank"
      action="https://formsubmit.co/paisafetivos@gmail.com"
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
        value={props.subject}
      />

      <div>
        <TextField 
          variant={props.variant}
          label={props.label} 
          margin="dense"
          fullWidth 
          type={props.type} 
          name={props.name} 
          placeholder={props.placeholder} />
      </div>

      <div>
        <TextField
          variant={props.variant}
          label={props.label2}
          margin="dense"
          fullWidth
          type={props.type2}
          name={props.name2}
          placeholder={props.placeholder2}
        />
      </div>

      <div>
        <TextField
          variant={props.variant}
          label={props.label3}
          margin="dense"
          fullWidth type={props.type3}
          name={props.name3}
          placeholder={props.placeholder3}
        />
      </div>

      <div>
        <TextField
          multiline
          margin="dense"
          fullWidth
          name="Mensagem"
          placeholder={props.placeholderMultiline}
          rows="2"
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
  );
}