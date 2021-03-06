import React from "react";
import { Img } from "./style";
import { Box, Button } from "@mui/material";

import Facebook from "assets/facebook-icon.png";
import Telegram from "assets/telegram-icon.png";
import Instagram from "assets/instagram-icon.png";
import Twitter from "assets/twitter-icon.png";

export function MenuSocialMedia() {
  const redesSociais = [
    {
      id: 2,
      name: "Instagram",
      img: Instagram,
      url: "https://www.instagram.com/paisafetivos/?hl=pt",
    },
    {
      id: 3,
      name: "Twitter",
      img: Twitter,
      url: "https://twitter.com/paisafetivos",
    },
    {
      id: 4,
      name: "Facebook",
      img: Facebook,
      url: "https://www.facebook.com/paisafetivosdobrasil",
    },
    {
      id: 5,
      name: "Telegram",
      img: Telegram,
      url: "https://t.me/ongpaisafetivosdobrasil",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex", justifyContent: "flex-end" },
      }}
    >
      {redesSociais.map((redesSocial) => (
        <a
          href={redesSocial.url}
          target="_blank"
          rel="noreferrer"
          key={redesSocial.id}
        >
          <Button sx={{ my: 2, color: "black", display: "block" }}>
            <Img
              src={redesSocial.img}
              alt={`logo com direcionamento para o ${redesSocial.name}`}
            />
          </Button>
        </a>
      ))}
    </Box>
  );
}
