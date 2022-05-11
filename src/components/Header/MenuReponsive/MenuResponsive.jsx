import React from "react";
import { Link, Drawer, Divider, List, ListItem } from "@mui/material";
import { ListItemText, Box } from "@mui/material";
import { styled } from "@mui/material/styles";



export function MenuResponsive({ opens }) {

  const pages = [
    { id: 1, title: "Quem Somos", rounting: "/sobre-nós" },
    { id: 2, title: "Como ajudar", rounting: "/como-ajudar" },
    { id: 3, title: "Preciso de ajuda", rounting: "/preciso-de-ajuda" },
    { id: 4, title: "Parceiros", rounting: "/parceiros" },
    { id: 5, title: "Dúvidas", rounting: "/duvida" },
    // A página de dúvida ainda não se encontra construída 28/04/2022
    { id: 6, title: "Contato", rounting: "/contato" },
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
          <Divider />
          {pages.map((text) => (
            <Box key={text.id}>
              <Link
                href={text.rounting}
                style={{
                  color: "#5D5D66",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
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
