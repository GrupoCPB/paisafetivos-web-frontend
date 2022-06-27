import styled from 'styled-components'
import { Box, Typography } from '@mui/material'


export const Display = styled(Box)`
  margin: 2.5em 0 0 0;
  padding: 2em 0 0 0;
  display: flex;
  justify-content: space-around;
  align-items: left;
  background-color: #FBFBFB;
`

export const Couple = styled.div`
  padding: 0 3.5em;
  margin-bottom: 5em;
`


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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "1.5em 3em",
  mb: "4em",
  filter: "drop-shadow(25px 25px #FBEC9D)"
}