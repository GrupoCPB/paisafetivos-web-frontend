import * as React from 'react';

// import flag from "assets/flag-icon.png";
import {  
        Button, 
        Dialog, DialogActions, DialogTitle,
        
        TextField,
        
      } 
from '@mui/material';

import { HowHelpStyle } from 'style/howHelp'
import { ArrowRightAlt } from '@mui/icons-material';

// const FlagFixed = () => {
//   return (
//     <div>
//       <img src={flag} alt="" />
//     </div>
//   )
// }

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
      {/* <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: " space-around",
          backgroundColor: "#ffffff",
          padding: "30px"
        }}
      >
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              display: "flex",
            }}>
            <FlagFixed/>
            <Stack>
              <Typography variant="h4">Voluntariado</Typography>
            </Stack>  

          </Box>
        </Stack>

      </Box> */}
      <Button 
        onClick={handleClickOpen}
        color="secondary"
        endIcon={<ArrowRightAlt color="secondary"/>}
      >
        {props.name}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Vamos juntos transformar vidas!</DialogTitle>
          <form action="https://formsubmit.co/cristoshiwassaki@gmail.com" method="POST">
            <div>
              <TextField
                margin="dense"
                name="nome"
                label="Qual é o seu nome?"
                type="text"
                variant="standard"
                placeholder="Digite seu nome completo"
              />
              <TextField
                margin="dense"
                name="email"
                label="E-mail para contato"
                type="email"
                variant="standard"
              />
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Subscribe</Button>
            </DialogActions>
          </form>
      </Dialog>
    </HowHelpStyle>
  );
}
