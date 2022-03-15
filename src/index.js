import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {  ThemeProvider } from "@mui/material/styles";
import theme from "./style/theme";

import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
