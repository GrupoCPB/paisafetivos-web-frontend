import { Box, Button } from "@mui/material";

export function Form(props) {
  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
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
        value="table" />

      <input 
        type="hidden" 
        name="_subject" 
        value={props.subject} />


            {props.children}
        
        
      <Button
        sx={{ mt: 1, fontSize: 18, fontWeight: 900 }}
        variant="contained"
        size="large"
        fullWidth
        type="submit"
      >
        Enviar
      </Button>
    </Box>
  );
}
