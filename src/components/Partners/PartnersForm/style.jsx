import styled from 'styled-components'
import { Typography } from '@mui/material'


export const Title = styled(Typography) `
  font-size: 20px;
  font-weight: 700;
  color: #4b4b4b;
  line-height: 40px
`

export const sectionForm = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  backgroundColor: "#ffffff",
  borderRadius: "5px",
  mt: "2em", 
  padding: "1.5em 3em",
  filter: "drop-shadow(30px 30px #FBEC9D)"
}
