import { Box, Button } from "@mui/material";
import React from "react";

import Whatsapp from "../../../assets/whatsapp-icon.png";
import Facebook from "../../../assets/facebook-icon.png";
import Telegram from "../../../assets/telegram-icon.png";
import Instagram from "../../../assets/instagram-icon.png";
import Twitter from "../../../assets/twitter-icon.png";

function MenuSocialMedia() {
  const redesSociais = [
    { name: "Whatsapp", img: Whatsapp, url: "http://wa.me/551145599550" },
    {
      name: "Facebook",
      img: Facebook,
      url: "https://www.facebook.com/paisafetivosdobrasil",
    },
    {
      name: "Telegram",
      img: Telegram,
      url: "https://t.me/ongpaisafetivosdobrasil",
    },
    {
      name: "Instagram",
      img: Instagram,
      url: "https://www.instagram.com/paisafetivos/?hl=pt",
    },
    { name: "Twitter", img: Twitter, url: "https://twitter.com/paisafetivos" },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex", justifyContent: "flex-end" },
      }}
    >
      {redesSociais.map((redesSocial) => (
        <a href={redesSocial.url} target="_blank" rel="noreferrer">
          <Button
            key={redesSocial.nome}
            sx={{ my: 2, color: "black", display: "block" }}
          >
            <img
              src={redesSocial.img}
              width={23}
              alt={`logo com direcionamento para o ${redesSocial.name}`}
            />
          </Button>
        </a>
      ))}
    </Box>
  );
}

export default MenuSocialMedia;
