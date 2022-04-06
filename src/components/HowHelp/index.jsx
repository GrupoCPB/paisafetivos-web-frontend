import helpImg from 'assets/ajuda-imagem.png'
import flag from 'assets/flag-icon.png'
// import arrow from 'assets/flecha-direita.png'

import { Stack, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box } from '@mui/system';


//deixar só a imagem da bandeira como componente estático

const FlagFixed = () => {
  return(
    <div>
      <img src={flag} alt="" />
    </div>
  )
}


export function HowHelpComponent(){
  return (
    <>
      <div>
        <div className="help-initial-text">
          <Typography variant="h4">Como eu posso ajudar</Typography>
          <Typography variant="body1">
            A Pais Afetivos é construída por várias mãos o que a<br/> torna mais do que
            uma instituição de acolhimento para<br/> pessoas LGBTQI+ em situação de abandono, 
            ela é uma<br /> organização de progresso do empoderamento, cultura,<br/> mobilização social
            e sensibilização das questões <br/>de direitos humanos.
          </Typography>
          <p>
            Você pode nos ajudar das seguintes formas:
          </p>
        </div>
        <img src={helpImg} alt="" />
      </div>
      
      <div className="help-options">
        <Box 
          component="div"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Stack direction="row" spacing={2}>
            <FlagFixed />
            <Stack>
              <Typography variant="h4">Doações</Typography>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <a href="/como-ajudar">Para doar</a>
                <ArrowRightAltIcon color="secondary" />
              </Box>
            </Stack>
          </Stack>
          <div className="help-right">
            <Typography variant="body1">
              A Pais Afetivos é uma instituição sem fins lucrativos, por isso<br/>
              precisamos de pessoas como você para continuarmos nossa<br/>
              missão. Você pode doar qualquer valor, isolado ou mensal, para<br/>
              manutenção e contribuição dos projetos da PaisAfetivos, além<br/>
              de roupas e demais elementos que achar prudente.
            </Typography>
          </div>
        </Box>
      </div>
    </>
  )
}