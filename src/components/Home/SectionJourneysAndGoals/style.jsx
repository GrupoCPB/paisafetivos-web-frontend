import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const Title = styled(Typography)`
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  line-height: 57px;
  color: #4b4b4b;
  max-width: 496px;
  margin: 60px 10px 0 10px;
`;

export const TitleM = styled(Typography)`
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  line-height: 57px;
  color: #4b4b4b;
  max-width: 496px;
`;

export const TitleCard = styled(Typography)`
  margin-top: 24px;
  color: #4b4b4b;
  font-size: 16px;
  font-weight: 800;
`;

export const Paragraph = styled(Typography)`
  margin: 45px 10px 0 10px;
  text-align: center;
  max-width: 666px;
`;
export const ParagraphCard = styled(Typography)`
  color: #5d5d66;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.0015em;
  margin: 16px 0 34px 0;
`;

export const Div = styled(Box)`
  margin: 0 30px;
  width: 20%;
  height: 0;
  border: 1px solid #cacaca;
`;

export const section = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "Center",
  backgroundColor: "#FBFBFB",
};

export const card = {
  backgroundColor: "#ECECEC",
  margin: "15px",
  maxWidth: "307px",
  height: "150px",
  borderRadius: "5px",
  padding: "0 15px",
};

export const botton = {
  marginTop: "60px",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { xs: "center", md: "space-around" },
  justifyContent: { xs: "center", md: "space-around" },
};

export const medium = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "60px",
  width: "100%",
};
