import React, { useState } from "react";
import { Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, Container, Button, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderMenu, LinkRounting, MenuItemAbout } from "./styled";
import logo from "assets/logo-header.png";
import { MenuResponsive } from "./MenuReponsive";
import { MenuSocialMedia } from "./MenuSocialMedia";


const pages = [
  { id: 1, title: "Como ajudar", rounting: "/" },
  { id: 2, title: "Parceiros", rounting: "/parceiros" },
    // O blog será constrído em um momento posterior
    // { id: 3, title: "Blog", rounting: "/" }
  { id: 4, title: "Contato", rounting: "/" },
];

const menuAbout = [
  { id: 2, title: "Como funciona", rounting: "/sobre-nós" },
  { id: 3, title: "Parceiros", rounting: "/parceiros" },
    // O blog será constrído em um momento posterior
    // { id: 3, title: "Blog", rounting: "/" }
  { id: 5, title: "Contato", rounting: "/" },
];

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [opens, setOpen] = useState(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


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
                sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", color: "black" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="right">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              <Button
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                id="basic-button"
                sx={{ my: 2, color: "black" }}
                endIcon={<ArrowDropDownIcon />}
              >
                <Typography
                  textAlign="right"
                  style={{
                    fontSize: 20,
                  }}
                >
                  Sobre nós
                </Typography>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {menuAbout.map((menu) => (
                  <LinkRounting href={menu.rounting} key={menu.title}>
                    <MenuItemAbout onClick={handleClose}>
                      <Typography textAlign="center" style={{ color: "black" }}>
                        {menu.title}
                      </Typography>
                    </MenuItemAbout>
                  </LinkRounting>
                ))}
              </Menu>

              {pages.map((page) => (
                <Button
                  key={page.id}
                  href={page.rounting}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", fontSize: 20 }}
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
