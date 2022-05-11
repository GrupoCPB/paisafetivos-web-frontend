import Typography from '@mui/material/Typography';
import styled from "styled-components";

export const H2 = styled(Typography)`
  margin-top: 34px;
  font-size: 42px;
  font-weight: 800;
  text-align: center;
  color: #4B4B4B;
`;

export const PBody = styled(Typography)`
  margin: 46px 15px 0 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: justify;
  max-width: 900px;
`;

export const H4 = styled(Typography)`
  font-size: 20px;
  font-weight: 800;
`;

export const PCard = styled(Typography)`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;

export const ButtonCard = styled.a`
  box-sizing: border-box;
  background-color: #FFFFFF;
  font-weight: 800;
  font-size: 16px;
  border-radius: 20px;
  width: 90%;
  height: 46px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const sectionHelpToo = {
  boxSizing: "border-box",
  backgroundColor: "#E5E5E5",
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  alignItems: "center",
  width: "100%",
}


export const sectionBotton = {
  display: "flex",
  flexDirection: { xs: "column", sm: "column", md: "row" } ,
  justifyContent: { sm: "space-between", md: "space-around" },
  alignItems: {sm: "center"},
  width: "100%",
}

export const card = {
  display: "flex",
  boxSizing: "border-box",
  mt: "50px",
  color: "#FFFFFF",
  width: { sm: "80%", md: "303px"},
  height: {xs:"200px", sm: "200px", md: "292px"},
  borderRadius: "20px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
}
