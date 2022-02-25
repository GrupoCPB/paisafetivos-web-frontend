import React from "react";
import { Link, Drawer, Divider, List, ListItem } from "@mui/material";
import { ListItemText, ListItemButton, Collapse, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled, /* useTheme */ } from "@mui/material/styles";
// import MuiAppBar from "@mui/material/AppBar";


export function MenuResponsive({ opens }) {
  // const theme = useTheme();

  const [sobreMobile, setSobreMobile] = React.useState(false);

  const handleClickSobreMobile = () => {
    setSobreMobile(!sobreMobile);
  };

  const pages = [
    { id: 1, title: "Como ajudar", rounting: "/" },
    { id: 2, title: "Parceiros", rounting: "/parceiros" },
    // O blog será constrído em um momento posterior
    // { id: 3, title: "Blog", rounting: "/" }
    { id: 4, title: "Contato", rounting: "/" },
  ];

  const settings = [
    { id: 1, title: "Como funciona", rounting: "/sobre-nós" },
    { id: 2, title: "Parceiros", rounting: "/parceiros" },
    // O blog será constrído em um momento posterior
    // { id: 3, title: "Blog", rounting: "/" }
    { id: 4, title: "Contato", rounting: "/" },
  ];

  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    })
  );

/*   const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  })); */

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  return (
    <>
      <Main open={opens}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={opens}
      >
        <DrawerHeader sx={{ marginTop: 0 }}></DrawerHeader>

        <List>
          <ListItemButton onClick={handleClickSobreMobile}>
            <ListItemText primary="Sobre nós" />
            {sobreMobile ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={sobreMobile} timeout="auto" unmountOnExit>
            {settings.map((setting) => (
              <List component="div" disablePadding key={setting.id}>
                <Link
                  href={setting.rounting}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={setting.title} />
                  </ListItemButton>
                </Link>
              </List>
            ))}
          </Collapse>
          <Divider />
          {pages.map((text) => (
            <Box key={text.id}>
              <Link
                href={text.rounting}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <ListItem button key={text.title}>
                  <ListItemText primary={text.title} />
                </ListItem>
              </Link>
              <Divider />
            </Box>
          ))}
        </List>
      </Drawer>
    </>
  );
}
