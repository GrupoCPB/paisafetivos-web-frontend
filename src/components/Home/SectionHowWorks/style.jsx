import styled from "styled-components";
import Typography from '@mui/material/Typography';
import backgound from 'assets/home-section-how-works.png'

export const Title = styled(Typography)`
  max-width: 310px;
  font-size: 32px;
  font-weight: 800;
  color: #4B4B4B;
`;

export const TitleCard = styled(Typography)`
  color: #262626;
  font-size: 20px;
  font-weight: 700;
`;

export const PCard = styled(Typography)`
  max-width: 397px;
`;

export const sectionHowWorks = {
  padding: "40px 0",
  backgroundImage: `url(${backgound})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export const iternalSetcion = {
  width: "90%",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "150px",
  paddingTop: "75px",
}

export const modes = {
  marginTop: "60px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}

export const cardText = {
  marginLeft: "10px"
}