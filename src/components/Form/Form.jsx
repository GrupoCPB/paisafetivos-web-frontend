import { Box, Button } from '@mui/material';

export function Form(props) {
  return (
    <Box
      component="form"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >

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
          {props.children}
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
    </Box>
  );
}