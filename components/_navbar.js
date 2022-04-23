import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AppBarSearch from "./_appbarSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserMenu from "./_userMenu";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import ThemeSwitch from "./_themeSwitch.js";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { setOpen } from "../store/drawerSlice";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ListItem } from "@mui/material";

export default function NavBar() {
  const dispatch = useDispatch();
  const drawer = useSelector((state) => state.drawer);
  const drawerWidth = drawer.drawerWidth;
  const auth = useAuth();
  const isUserLoggedIn = auth?.isUserLogged;
  const handleDrawerToggle = () => {
    dispatch(setOpen());
  };
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ gap: 1 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <AppBarSearch sx={{ flexGrow: 1, width: "50%" }} />
        <Link
          variant="button"
          color="text.primary"
          href="/cart"
          sx={{ my: 1, mx: 1.5 }}
        >
          <IconButton>
            {/* <Badge badgeContent={noOfProducts} color="secondary"> */}
            <ForumIcon />
            {/* </Badge> */}
          </IconButton>
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/cart"
          sx={{ my: 1, mx: 1.5 }}
        >
          <IconButton>
            {/* <Badge badgeContent={noOfProducts} color="secondary"> */}
            <NotificationsIcon />
            {/* </Badge> */}
          </IconButton>
        </Link>
        <ThemeSwitch />
        {!isUserLoggedIn && (
          <Button
            href="/auth/login"
            variant="contained"
            color="success"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        )}
        {isUserLoggedIn && <UserMenu />}
      </Toolbar>
    </AppBar>
  );
}
