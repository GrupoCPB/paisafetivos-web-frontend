import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import theme  from 'style/theme'


const Title = styled(Typography) `
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: ${theme.palette.text.primary};
`

const Text = styled(Typography)`
  text-align: center;
  color: ${theme.palette.text.primary};
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`

export function PartnerSuport(){
  return(
    <>
      <Title
        variant="h2">
          Nossos Parceiros
      </Title>
      <Text
        variant="body1">
          Nossa atuação é facilitada com o apoio de nossos parceiros corporativos, que nos dão<br />
          suporte em nossos programas e nos capacitam a servir a população LGBTQ+.
      </Text>
    </>
  )

}