import styled from "styled-components";
import Typography from "@mui/material/Typography";
import backgound from "assets/home-section-how-works.png";

export const Title = styled(Typography)`
  max-width: 310px;
  font-size: 32px;
  margin-bottom: 50px;
  font-weight: 800;
  color: #4b4b4b;
`;

export const TitleCard = styled(Typography)`
  color: #262626;
  font-size: 20px;
  font-weight: 700;
`;

export const PCard = styled(Typography)`
  max-width: 397px;
`;

export const Img = styled.img`
  margin: 20px 0;
`;

export const sectionHowWorks = {
  padding: "40px 0",
  backgroundImage: `url(${backgound})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const iternalSetcion = {
  width: "75%",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "60px 15px 75px 15px",
};

export const modes = {
  marginTop: "60px",
  display: "flex",
  flexDirection: { xs: "column", sm: "column", md: "row" },
  justifyContent: "center",
  alignItems: "center",
};

export const cardText = {
  marginLeft: "10px",
};
