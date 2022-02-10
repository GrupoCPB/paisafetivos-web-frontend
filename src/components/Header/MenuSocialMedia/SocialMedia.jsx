import { Box, Button } from "@mui/material";
import React from "react";

import Whatsapp from "../../../assets/whatsapp-icon.png";
import Facebook from "../../../assets/facebook-icon.png";
import Telegram from "../../../assets/telegram-icon.png";
import Instagram from "../../../assets/instagram-icon.png";
import Twitter from "../../../assets/twitter-icon.png";

function MenuSocialMedia() {
  const redesSociais = [
    {
      id: 1,
      name: "Whatsapp",
      img: Whatsapp,
      url: "http://wa.me/551145599550",
    },
    {
      id: 2,
      name: "Facebook",
      img: Facebook,
      url: "https://www.facebook.com/paisafetivosdobrasil",
    },
    {
      id: 3,
      name: "Telegram",
      img: Telegram,
      url: "https://t.me/ongpaisafetivosdobrasil",
    },
    {
      id: 4,
      name: "Instagram",
      img: Instagram,
      url: "https://www.instagram.com/paisafetivos/?hl=pt",
    },
    {
      id: 5,
      name: "Twitter",
      img: Twitter,
      url: "https://twitter.com/paisafetivos",
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
