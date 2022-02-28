import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonDonation = styled(Button)`
  font-size: 20px;
  padding: 19px 59px;
  border-radius: 10px;

  font-size: 20px;
  line-height: 30px;

  color: #f1f1f1;
  background-color: #0f6fff;

  transition: all ease 0.2s;
  &:hover {
    filter: brightness(120%);
  }
`;
