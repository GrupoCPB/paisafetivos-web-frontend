import Typography from '@mui/material/Typography';
import styled from "styled-components";

export const Title = styled(Typography)`
  text-align: center;
`;

export const Paragraph = styled(Typography)`
  text-align: center;
`;

export const section = {

}

export const botton = {
  display: "flex",
  flexDirection: {xs: "column", md: "row"},
  alignItems: { xs: "center", md: "space-around" },
  justifyContent: { xs: "center", md: "space-around" }
}

export const card = {
  backgroundColor:"#ECECEC",
  margin: "15px", 
  maxWidth: "60%"
}
