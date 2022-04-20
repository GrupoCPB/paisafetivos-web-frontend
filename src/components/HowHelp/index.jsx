//imagens
import helpImg from "assets/ajuda-imagem.png";
import flag from "assets/flag-icon.png";

//material-ui
import { Button, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box } from "@mui/system";

//styled-components
import { HowHelpStyle } from "style/howHelp";

import FormDialog from "./volunteerForm";


const FlagFixed = () => {
  return (
    <div>
      <img src={flag} alt="" />
    </div>
  );
};

export function HowHelpComponent() {
  return (
    <HowHelpStyle>
      <div className="help-initial-text">
        <div>
          <Typography variant="h2">Como eu posso ajudar</Typography>
          <Typography variant="body1">
            A Pais Afetivos é construída por várias mãos o que a<br /> torna mais
            do que uma instituição de acolhimento para
            <br /> pessoas LGBTQI+ em situação de abandono, ela é uma
            <br /> organização de progresso do empoderamento, cultura,
            <br /> mobilização social e sensibilização das questões <br />
            de direitos humanos.
          </Typography>
          <br/>
          <Typography variant="body1">
            Você pode nos ajudar das seguintes formas:
          </Typography>
        </div>
        <img src={helpImg} alt="" />
      </div>
      <div className="help-options">
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#F7EFF3",
            padding: '30px'
          }}
        >
          <Stack direction="row" spacing={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <FlagFixed />
                <Stack>
                  <Typography variant="h4">Doações</Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <a href="/como-ajudar">Para doar</a>
                    <ArrowRightAltIcon color="secondary" />
                  </Box>
                </Stack>
            </Box>
          </Stack>
          <div className="help-right">
            <Typography 
              variant="body1"
              textAlign="center"
            >
             Você pode doar qualquer valor para manutenção e contribuição dos<br/>
             projetos da PaisAfetivos, além de roupas, alimentos e demais elementos.
            </Typography>
          </div>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: '#FfFfFf',
            padding: '30px'
          }}
        >
          <Stack direction="row" spacing={1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
              <FlagFixed />
              <Stack>
                <Typography variant="h4">Voluntariado</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <FormDialog name="Seja um voluntário" />
                </Box>
              </Stack>
              </Box>
          </Stack>
          <div className="help-right">
            <Typography 
              variant="body1"
              textAlign="center"
            >
              Você pode nos ajudar em nosso trabalho como voluntário. Como<br/>
              atuamos de forma multidisciplinar todo conhecimento é bem vindo.<br/>
              Entre em contato conosco e te apresentaremos nossa demanda.
            </Typography>
          </div>
        </Box>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: '#F7EFF3',
            padding: '30px'
          }}
        >
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <FlagFixed />
              <Stack>
                <Typography variant="h4">Aniversário Solidário</Typography>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Button 
                    color="secondary" 
                    endIcon={<ArrowRightAltIcon color="secondary"/>}
                    sx={{
                      fontWeight: "700",
                      fontSize: "16px",
                    }}
                  >
                    Colabore conosco
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <div className="help-right">
            <Typography 
              variant="body1"
              textAlign="center"
            >
              Faça seu Aniversário Solidário e ajude a #PaisAfetivos
              <br/><br/>
              Você pode sugerir que cada um de seus convidados destine um valor<br/>
              para as ações da ong e esta doação seria uma forma de seus amigos te<br/>
              presentearem em seu aniversário.
            </Typography>
          </div>
        </Box>
      </div>
    </HowHelpStyle>
  );
}
