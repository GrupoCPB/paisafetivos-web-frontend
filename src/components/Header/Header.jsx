import React, { useState } from "react";
import { Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Container, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderMenu, LinkRounting } from "./styled";
import logo from 'assets/logo-header.png'
import { MenuResponsive } from "./MenuReponsive";
import { MenuSocialMedia } from "./MenuSocialMedia";


const pages = [
  { id: 1, title: "Quem Somos", rounting: "/sobre-nós" },
  { id: 2, title: "Como ajudar", rounting: "/como-ajudar" },
  { id: 3, title: "Parceiros", rounting: "/parceiros" },
  { id: 4, title: "Dúvidas", rounting: "/duvida" },
  // A página de dúvida ainda não se encontra construída 28/04/2022
  { id: 5, title: "Contato", rounting: "/contato" },
];

export function Header() {
  const [opens, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!opens);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderMenu
        position="fixed"
        color="ligth"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <LinkRounting href="/">
                <img src={logo} alt="logo ong pais afetivos" width={183} />
              </LinkRounting>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <LinkRounting href="/">
                <img src={logo} alt="logo ong pais afetivos" width={92} />
              </LinkRounting>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", justifyContent: "flex-end" },
              }}
            >
              <IconButton
                size="large"
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.id}
                  href={page.rounting}
                  sx={
                    {
                      my: 2,
                      display: "block",
                      color: "#5D5D66",
                      fontSize: 20,
                      fontWeight: "bold",
                    }
                  }
                >
                  {page.title}
                </Button>
              ))}
            </Box>
            <MenuSocialMedia />
          </Toolbar>
        </Container>
      </HeaderMenu>
      <MenuResponsive opens={opens} />
    </Box>
  );
}
