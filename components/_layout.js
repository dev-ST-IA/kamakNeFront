import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./_footer";
import NavBar from "./_navbar";
import { Box } from "@mui/system";
import MetaHead from "./_head";
import AuthProvider from "./auth/_authProvider";
import { useSelector } from "react-redux";
import Sidebar from "./sideBar";

export default function Layout({ children }) {
  const drawer = useSelector((state) => state.drawer);
  const drawerWidth = drawer.drawerWidth;
  const mode = useSelector((state) => state.themeMode.mode);
  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MetaHead />
        <NavBar />
        <CssBaseline />
        <Box
          component="main"
          sx={{
            margin: "auto",
            width: 1,
            minHeight: 1,
            display: "flex",
          }}
        >
          <Sidebar />
          <Box
            sx={{
              margin: "1rem auto",
              paddingBottom: "1rem",
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              minHeight: 1,
              display: "flex",
              flexDirection: "column",
              left: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {children}
          </Box>
        </Box>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  );
}
