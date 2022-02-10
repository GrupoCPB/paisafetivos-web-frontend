import { Box, Card } from "@mui/material";
import styled from "styled-components";

export const CardContentBlog = styled(Card)`
  width: 151px;
  height: 121px;
  margin-bottom: 15px;
  background: rgba(196, 196, 196, 0.02);
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    width: 143px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 14px;
    background: rgba(196, 196, 196, 0.78);
    border-radius: 0px 0px 16px 16px;
    padding: 4px;
    font-size: 15px;
  }
`;

export const TitleResponsive = styled.div``;

export const ResponsiveContainer = styled(Box)`
  background-color: #ff40a7;
  padding: 0px;

  h2 {
    text-align: center;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    padding-top: 20px;
  }
`;
