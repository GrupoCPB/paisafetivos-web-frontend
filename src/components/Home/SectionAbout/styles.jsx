import styled from 'styled-components'
import theme from 'style/theme'
import Typography from '@mui/material/Typography';

export const ArrowSignal = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  color: ${theme.palette.secondary.main};
`;

export const H2 = styled(Typography )`
  margin-top: 50px;
  font-size: 42px;
  font-weight: 800;
  line-height: 57px;
  color:#FFFFFF;
`;

export const Img = styled.img`
  margin: 2px;

`;

export const sectionAbout = {
  backgroundColor: "#404040",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}

export const sectionImages = {
  display: "flex",
  mt: "50px",
  mb: "116px",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  boxSizing: "border-box"
}