import { Typography } from "@mui/material";
import theme from "style/theme";
import styled from 'styled-components'

export const Title = styled(Typography) `
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  color: ${theme.palette.text.primary};
`

export const Text = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;
`