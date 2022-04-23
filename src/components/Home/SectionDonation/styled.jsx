import Typography from '@mui/material/Typography';
import styled from "styled-components";
import { Button } from "@mui/material";
import donateImg from "assets/connectando-pessoas.png";

export const ButtonDonation = styled(Button)`
  font-size: 20px;
  padding: 19px 59px;
  border-radius: 10px;
  font-weight: 800;
  line-height: 30px;
  color: #FFFFFF;
  background-color:  #398791;
  margin-bottom: 40px;
  transition: all ease 0.2s;
  &:hover {
    filter: brightness(120%);
  }
`;

export const Strong = styled.strong`
  color: #f63ebb;
`;

export const H1 = styled(Typography)`
  color: #4B4B4B;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 42px;
  line-height: 57px;
  letter-spacing: 0.0025em;
  margin-bottom: 40px;
  margin-top: 35px;
`;

export const Img = styled.img`
  width: 606px;
  height: 486.01px;
`;

export const P = styled.p`
  font-weight: 500;
  color: #545454;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const sectionLefth = {
  display: { xs: "flex" },
  flexDirection: { xs: "column" } ,
  justifyContent: { xs: "center" },
  width: { xs: "430px", md: "370px", lg: "429px"},
}

export const sectionDonateResponsive = {
  mt: { md: "80px"},
  backgroundImage: { xs: `url(${donateImg})`, md: "none"},
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}

export const buttonFull = {
  display: { xs: "none", md: "block" }
}

export const buttonResponsive = {
  display: { xs: "block", md: "none" }
}

