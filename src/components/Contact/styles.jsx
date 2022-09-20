import styled from 'styled-components'
import { Typography } from '@mui/material'


export const Display = {
  backgroundColor: "#FBFBFB"
}


export const H2 = styled(Typography)`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 15px;
  letter-spacing: 0.0025em;
  color: #4B4B4B;
`

export const Intro = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.0015em;
  color: #545454;
`

export const contactForm = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "3em",
  margin: "2em 5em",
  filter: "drop-shadow(30px 25px #FBEC9D)"
}