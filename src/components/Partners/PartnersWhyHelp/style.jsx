import { Typography } from "@mui/material";
import styled from 'styled-components'

export const Title = styled(Typography)`
  color: #4b4b4b;
  font-weight: 800;
  font-size: 36px;
  line-height: 49.18px;
  margin-bottom: 0.5em;
`;

export const Text = styled(Typography)`
  color: #545454;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 0.5em;
`

export const Bold = styled.strong`
  font-weight: 700;
  line-height: 24px;
`

export const sectionWhyHelp = {
  mt: "2.5em",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  backgroundColor: "#fbfbfb"
}